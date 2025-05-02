import { useEffect, useState } from "react";
import { Map, View } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { defaults as defaultInteractions, DragRotate } from "ol/interaction.js";
import { apply } from "ol-mapbox-style";

import { MAP_TARGET_ID, VGU_COORDINATES, VECTOR_LAYER_STYLE } from "../lib";

const MAP_TILES_API_URL =
  "https://api.maptiler.com/maps/019690d8-2965-7306-b308-5ed6041f45be/style.json?key=aIIH2TLTQGTuteAf6oBb";

export const useMap = () => {
  const [map, setMap] = useState<Map | null>(null);
  const [vectorLayer, setVectorLayer] = useState<VectorLayer | null>(null);

  useEffect(() => {
    const initialMap = new Map({
      target: MAP_TARGET_ID,
      // layers: [
      //   new TileLayer({
      //     source: new OSM(),
      //   }),
      // ],
      view: new View({
        zoom: 17,
        center: VGU_COORDINATES,
      }),
      controls: [],
      interactions: defaultInteractions().extend([new DragRotate()]),
    });

    apply(initialMap, MAP_TILES_API_URL);

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
