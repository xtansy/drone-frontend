import styles from "./styles.module.scss";

import { FC } from "react";
import { Zoom } from "ol/control";
import { PolygonModel } from "../../../../shared/types";
import { MINI_MAP_TARGET_ID } from "../../lib";
import {
  useDrawPointsFromPolygons,
  useDrawPolygons,
  useMap,
} from "../../hooks";
import { View } from "ol";
import { defaults as defaultInteractions, DragRotate } from "ol/interaction.js";
import cn from "classnames";

interface MiniMapProps {
  polygon: PolygonModel;
  className?: string;
  targetId?: string;
}

export const MiniMap: FC<MiniMapProps> = ({
  polygon,
  className,
  targetId = MINI_MAP_TARGET_ID,
}) => {
  const center = [
    polygon.organizationPoint.longitude,
    polygon.organizationPoint.latitude,
  ];

  const { vectorLayer } = useMap({
    targetId,
    view: new View({ zoom: 16.8, center }),
    controls: [new Zoom({ className: styles.customZoomControl })],
    interactions: defaultInteractions({
      dragPan: false,
      altShiftDragRotate: false,
      pinchRotate: false,
    }).extend([new DragRotate()]),
  });

  useDrawPolygons(vectorLayer?.getSource() ?? null, [polygon]);
  useDrawPointsFromPolygons(vectorLayer?.getSource() ?? null, [polygon]);

  return <div id={targetId} className={cn(styles.miniMap, className)} />;
};
