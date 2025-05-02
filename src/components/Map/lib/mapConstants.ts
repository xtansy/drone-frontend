import { Circle, Fill, Stroke, Style } from "ol/style";

export const MAP_TARGET_ID = "map";

export const WGS84_PROJECTION = "EPSG:4326"; // Географическая проекция, координаты WGS84 (широта/долгота)

export const WEB_MERCATOR_PROJECTION = "EPSG:3857"; // Проекция Web Mercator (для OpenLayers)

export const VGU_COORDINATES = [4364371.807213246, 6738297.108359874];

export const VECTOR_LAYER_STYLE = new Style({
  stroke: new Stroke({
    color: "rgba(0, 191, 255, 0.5)", // primary-color с прозрачностью
    width: 2,
  }),
  fill: new Fill({
    color: "rgba(17, 17, 51, 0.2)", // card-bg-color с прозрачностью
  }),
  image: new Circle({
    radius: 6,
    fill: new Fill({ color: "rgba(0, 191, 255, 0.3)" }), // primary-color
    stroke: new Stroke({
      color: "rgba(0, 255, 255, 0.8)", // accent-color
      width: 2,
    }),
  }),
});

export const MAIN_POINT_STYLE = [
  new Style({
    // Пульсирующее свечение
    image: new Circle({
      radius: 20,
      stroke: new Stroke({
        color: "rgba(0, 255, 255, 0.3)", // мягкий голубой
        width: 10,
      }),
    }),
  }),
  new Style({
    // Внешнее кольцо
    image: new Circle({
      radius: 10,
      stroke: new Stroke({
        color: "rgba(0, 200, 255, 0.7)",
        width: 2,
      }),
    }),
  }),
  new Style({
    // Внутренний круг
    image: new Circle({
      radius: 6,
      fill: new Fill({
        color: "rgba(0, 150, 255, 1)",
      }),
      stroke: new Stroke({
        color: "rgba(255, 255, 255, 0.9)",
        width: 1.5,
      }),
    }),
  }),
];
