import { RefObject, useEffect, useState } from "react";
import Overlay from "ol/Overlay";
import { Feature, Map as OlMap } from "ol";
import { MapBrowserEvent } from "ol";
import { Coordinate } from "ol/coordinate";

import { type PopupData } from "./types";
import {
  isPolygonFeature,
  isPointFeature,
  isOrganizationPointFeature,
} from "../lib";

import type {
  PolygonFeature,
  PointFeature,
  OrganizationPointFeature,
} from "./types";

export const usePopup = (
  map: OlMap | null,
  popupRef: RefObject<HTMLDivElement | null>
) => {
  const [popupData, setPopupData] = useState<PopupData | null>(null);

  useEffect(() => {
    if (!map || !popupRef?.current) return;

    const overlay = new Overlay({
      element: popupRef.current,
      positioning: "bottom-center",
      stopEvent: false,
      offset: [0, -10],
    });

    map.addOverlay(overlay);

    const handlePointerMove = (evt: MapBrowserEvent) => {
      const feature = map.forEachFeatureAtPixel(evt.pixel, (f) => {
        if (!(f instanceof Feature)) return;

        if (
          isPolygonFeature(f) ||
          isPointFeature(f) ||
          isOrganizationPointFeature(f)
        ) {
          return f;
        }
      }) as
        | PolygonFeature
        | PointFeature
        | OrganizationPointFeature
        | undefined;

      if (feature) {
        const coordinate: Coordinate = evt.coordinate;

        if (isPolygonFeature(feature)) {
          setPopupData({
            type: "polygon",
            coordinate,
            data: {
              _id: feature.get("_id"),
              points: feature.get("points"),
              organizationPoint: feature.get("organizationPoint"),
            },
          });
        } else if (isPointFeature(feature)) {
          setPopupData({
            type: "point",
            coordinate,
            data: {
              _id: feature.get("_id"),
              lastMeasurement: feature.get("measurements").at(-1),
            },
          });
        } else if (isOrganizationPointFeature(feature)) {
          setPopupData({
            type: "organizationPoint",
            coordinate,
            data: {
              _id: feature.get("_id"),
              name: feature.get("name"),
            },
          });
        }

        overlay.setPosition(coordinate);
        popupRef.current!.style.display = "block";
        return;
      }

      popupRef.current!.style.display = "none";
      setPopupData(null);
    };

    map.on("pointermove", handlePointerMove);

    return () => {
      map.un("pointermove", handlePointerMove);
      map.removeOverlay(overlay);
    };
  }, [map, popupRef]);

  return { popupData };
};
