import styles from "./styles.module.scss";

import { FC, useEffect, useRef, useState } from "react";
import {
  useMap,
  useDrawPolygons,
  usePopup,
  useDrawPointsFromPolygons,
  useClick,
} from "../hooks";
import { MAP_TARGET_ID, formatCoordinates } from "../lib";
import { MeasurementPointModel, PolygonModel } from "../../../shared/types";
import { LineChart } from "@mui/x-charts/LineChart";
import { ButtonCustom } from "../../../shared/ui";
import { Box, Tabs, Tab } from "@mui/material";
import { useSearchParams } from "react-router";

interface MapProps {
  polygons: PolygonModel[];
}

export const Map: FC<MapProps> = ({ polygons }) => {
  const { map, vectorLayer } = useMap();
  const popupRef = useRef<HTMLDivElement>(null);
  const { popupData } = usePopup(map, popupRef);
  const { selectedFeatureData, clear } = useClick(map);

  const [searchParams] = useSearchParams();

  const lat = parseFloat(searchParams.get("lat") ?? "");
  const lon = parseFloat(searchParams.get("lon") ?? "");

  useDrawPolygons(vectorLayer?.getSource() ?? null, polygons);
  useDrawPointsFromPolygons(vectorLayer?.getSource() ?? null, polygons);

  const measurements =
    selectedFeatureData?.type === "point"
      ? selectedFeatureData.data.measurements.slice(-5)
      : [];

  const [selectedMetric, setSelectedMetric] = useState("temperature");

  const metricLabels: Record<string, string> = {
    temperature: "Температура (°C)",
    co2_level: "CO₂ (ppm)",
    humidity: "Влажность (%)",
    pressure: "Давление (гПа)",
  };

  const metricColors: Record<string, string> = {
    temperature: "#00ffff",
    co2_level: "#ff3366",
    humidity: "#66ff66",
    pressure: "#ffa500",
  };

  const handleMetricChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedMetric(newValue);
  };

  useEffect(() => {
    if (map && !isNaN(lat) && !isNaN(lon)) {
      map.getView().setCenter([lat, lon]);
    }
  }, [lat, lon, map]);

  return (
    <div id={MAP_TARGET_ID} className={styles.map}>
      <div ref={popupRef} className={styles.popup}>
        {popupData && (
          <>
            {popupData.type === "polygon" && (
              <div>
                <strong>Полигон: {popupData.data.name}</strong>
                <div>Точек: {popupData.data.points.length}</div>
              </div>
            )}
            {popupData.type === "point" && (
              <div>
                <strong>Точка измерения</strong>
                <div>Последние измерения:</div>
                <div>
                  Температура: {popupData.data.measurements.at(-1).temperature}{" "}
                  °C
                </div>
                <div>
                  CO₂: {popupData.data.measurements.at(-1).co2_level} ppm
                </div>
              </div>
            )}
            {popupData.type === "organizationPoint" && (
              <div>
                <strong>{popupData.data.name}</strong>
              </div>
            )}
          </>
        )}
      </div>

      {selectedFeatureData?.type === "point" && (
        <div className={styles.infoCard}>
          <button
            className={styles.closeButton}
            onClick={clear}
            title="Закрыть"
          >
            ✕
          </button>
          <h2 className={styles.title}>Точка с измерениями</h2>
          <p>
            <span>Организация: </span>
            {selectedFeatureData.data.organizationPoint.name}
          </p>
          <p>
            <span>ID:</span> {selectedFeatureData.data._id}
          </p>
          <p>
            <span>Координаты:</span>{" "}
            {formatCoordinates([
              selectedFeatureData.data.latitude,
              selectedFeatureData.data.longitude,
            ])}
          </p>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              mb: 1,
              backgroundColor: "var(--card-bg-color)",
              border: "1px solid var(--border-color)",
              borderRadius: "6px",
              padding: "4px",
            }}
          >
            <Tabs
              value={selectedMetric}
              onChange={handleMetricChange}
              variant="scrollable"
              sx={{
                minHeight: 0,
                "& .MuiTab-root": {
                  minHeight: 0,
                  padding: "4px 8px",
                  fontSize: "0.8rem",
                  textTransform: "none",
                  borderRadius: "6px",
                  transition: "background-color 0.2s",
                  "&.Mui-selected": {
                    // backgroundColor: "var(--primary-color)",
                    // color: "#000",
                    // boxShadow: "0 0 6px var(--accent-color)",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(0, 191, 255, 0.2)",
                  },
                },
              }}
            >
              {Object.entries(metricLabels).map(([key, label]) => (
                <Tab key={key} label={label} value={key} />
              ))}
            </Tabs>
          </Box>

          <div className={styles.chartWrapper}>
            <LineChart
              xAxis={[
                {
                  scaleType: "point",
                  data: measurements.map((m) =>
                    new Date(m.createdAt).toLocaleTimeString()
                  ),
                },
              ]}
              series={[
                {
                  data: measurements.map(
                    (m) =>
                      m[selectedMetric as keyof MeasurementPointModel] as number
                  ),
                  label: metricLabels[selectedMetric],
                  color: metricColors[selectedMetric],
                },
              ]}
              width={300}
              height={200}
            />
          </div>

          <Box
            sx={{
              marginTop: "1rem",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ButtonCustom>Подробная статистика</ButtonCustom>
          </Box>
        </div>
      )}
    </div>
  );
};
