import { Fill, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";

export const MAP_TARGET_ID = "map";

export const WGS84_PROJECTION = "EPSG:4326"; // Географическая проекция, координаты WGS84 (широта/долгота)

export const WEB_MERCATOR_PROJECTION = "EPSG:3857"; // Проекция Web Mercator (для OpenLayers)

export const VGU_COORDINATES = [4364371.807213246, 6738297.108359874];

export const VECTOR_LAYER_STYLE = new Style({
  stroke: new Stroke({
    color: "blue",
    width: 2,
  }),
  fill: new Fill({
    color: "rgba(0, 0, 255, 0.1)",
  }),
  image: new CircleStyle({
    radius: 6,
    fill: new Fill({ color: "rgba(0, 0, 255, 0.3)" }),
    stroke: new Stroke({ color: "rgba(0, 0, 255, 0.8)", width: 2 }),
  }),
});
