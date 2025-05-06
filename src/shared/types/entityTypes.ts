export interface MeasurementDeviceModel {
  name: string;
  manufacturer: string;
  serialNumber: string;
}

export interface MeasurementPointModel {
  temperature: number;
  co2_level: number;
  humidity: number; // влажность
  pressure: number; // давление
  createdAt: string;
  measurementDevice: MeasurementDeviceModel;
}

export interface OrganizationPointModel {
  name: string;
  latitude: number;
  longitude: number;
}

export interface PointModel {
  latitude: number;
  longitude: number;
  measurements: MeasurementPointModel[];
  organizationPoint: OrganizationPointModel;
}

export interface PolygonModel {
  coordinates: number[][];
  points: PointModel[];
  organizationPoint: OrganizationPointModel;
}
