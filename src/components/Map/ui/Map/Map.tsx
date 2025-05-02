import styles from "./styles.module.scss";

import { useMap, usePolygon } from "../../hooks";
import { MAP_TARGET_ID } from "../../lib";

export const Map = () => {
  const { vectorLayer } = useMap();

  usePolygon(vectorLayer);

  return <div id={MAP_TARGET_ID} className={styles.map} />;
};
