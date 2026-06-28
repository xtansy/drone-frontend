import { toLonLat } from "ol/proj";
import { type PointModel } from "../../shared/types";
import { type PointRow } from "./constants";
import { generateRandomNumber } from "../../shared/lib";

export const converter = (points: PointModel[]): PointRow[] => {
  const ans: PointRow[] = [];

  points.forEach((point) => {
    const [longitude, latitude] = toLonLat([point.longitude, point.latitude]);

    let newPoint = {
      id: generateRandomNumber(),
      organization: point.organizationPoint.name,
      longitude,
      latitude,
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
