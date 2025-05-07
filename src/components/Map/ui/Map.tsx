import styles from "./styles.module.scss";

import { FC, useRef } from "react";

import {
  useMap,
  useDrawPolygons,
  usePopup,
  useDrawPointsFromPolygons,
} from "../hooks";
import { MAP_TARGET_ID } from "../lib";
import { PolygonModel } from "../../../shared/types";

interface MapProps {
  polygons: PolygonModel[];
}

export const Map: FC<MapProps> = ({ polygons }) => {
  const { map, vectorLayer } = useMap();

  const popupRef = useRef<HTMLDivElement>(null);

  const { popupData } = usePopup(map, popupRef);

  useDrawPolygons(vectorLayer?.getSource() ?? null, polygons);
  useDrawPointsFromPolygons(vectorLayer?.getSource() ?? null, polygons);

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
                  Температура: {popupData.data.lastMeasurement.temperature} °C
                </div>
                <div>CO₂: {popupData.data.lastMeasurement.co2_level} ppm</div>
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
    </div>
  );
};
