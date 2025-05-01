import { useEffect, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import { defaults as defaultInteractions, DragRotate } from "ol/interaction.js";

import { MAP_TARGET_ID, VGU_COORDINATES, VECTOR_LAYER_STYLE } from "../lib";

export const useMap = () => {
  const [map, setMap] = useState<Map | null>(null);
  const [vectorLayer, setVectorLayer] = useState<VectorLayer | null>(null);

  useEffect(() => {
    const initialMap = new Map({
      target: MAP_TARGET_ID,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        zoom: 17,
        center: VGU_COORDINATES,
      }),
      controls: [],
      interactions: defaultInteractions().extend([new DragRotate()]),
    });

    const vectorLayerInitial = new VectorLayer({
      source: new VectorSource(),
      style: VECTOR_LAYER_STYLE,
    });

    initialMap.addLayer(vectorLayerInitial);
    setVectorLayer(vectorLayerInitial);
    setMap(initialMap);

    return () => {
      initialMap.setTarget(undefined);
      setMap(null);
      setVectorLayer(null);
    };
  }, []);

  return { map, vectorLayer };
};
