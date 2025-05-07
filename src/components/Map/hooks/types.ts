import { Feature } from "ol";
import { Point, Polygon } from "ol/geom";

import type {
  MeasurementPointModel,
  OrganizationPointModel,
  PointModel,
  PolygonModel,
} from "../../../shared/types";

export type FeatureType = "polygon" | "point" | "organizationPoint";

export interface PolygonFeature
  extends Feature<Polygon>,
    Omit<PolygonModel, "coordinates"> {
  get(name: "featureType"): "polygon";
  get(name: "_id"): string;
  get(name: "points"): PointModel[];
  get(name: "organizationPoint"): OrganizationPointModel;
}

export interface PointFeature
  extends Feature<Point>,
    Omit<PointModel, "latitude" | "longitude"> {
  get(name: "_id"): string;
  get(name: "featureType"): "point";
  get(name: "measurements"): MeasurementPointModel[];
  get(name: "organizationPoint"): OrganizationPointModel;
}

export interface OrganizationPointFeature
  extends Feature<Point>,
    Omit<OrganizationPointModel, "latitude" | "longitude"> {
  get(name: "featureType"): "organizationPoint";
  get(name: "_id"): string;
  get(name: "name"): string;
}

export interface PopupData {
  type: FeatureType;
  coordinate: number[];
  data: any;
}
