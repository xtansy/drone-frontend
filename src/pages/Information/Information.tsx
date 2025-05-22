import styles from "./styles.module.scss";

import { useEffect, useState } from "react";

import { Typography, Box } from "@mui/material";

import { PaperCustom, DataGridCustom } from "../../shared/ui";
import { getAllPoints } from "../../shared/api";
import { columns, type PointRow } from "./constants";
import { type PointModel } from "../../shared/types";
import { generateRandomNumber } from "../../shared/lib";
import { useNavigate } from "react-router";
const converter = (points: PointModel[]): PointRow[] => {
  const ans: PointRow[] = [];

  points.forEach((point) => {
    let newPoint = {
      id: generateRandomNumber(),
      organization: point.organizationPoint.name,
      latitude: point.latitude,
      longitude: point.longitude,
    };

    point.measurements.forEach((measurement) => {
      const newPointMeasurement = {
        temperature: measurement.temperature,
        co2: measurement.co2_level,
        humidity: measurement.humidity,
        pressure: measurement.pressure,
        measurementTime: measurement.createdAt,
      };
      newPoint = { ...newPoint, ...newPointMeasurement };
    });

    ans.push(newPoint as PointRow);
  });

  return ans;
};

export const Information = () => {
  const [points, setPoints] = useState<PointRow[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllPoints().then((res) => {
      const rows = converter(res.data);
      setPoints(rows);
    });
  }, []);

  const handleRowClick = (lon: number, lat: number) => {
    navigate(`/map?lon=${lon}&lat=${lat}`);
  };

  return (
    <PaperCustom sx={{ marginTop: "50px" }}>
      <Typography className={styles.title} variant="h2">
        Мониторинговая таблица
      </Typography>

      <Box sx={{ height: "100%", width: "100%", overflow: "auto" }}>
        <DataGridCustom
          rows={points}
          columns={columns}
          onRowClick={(params) => {
            const { longitude, latitude } = params.row;
            handleRowClick(longitude, latitude);
          }}
        />
      </Box>
    </PaperCustom>
  );
};
