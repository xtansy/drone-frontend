import styles from "./styles.module.scss";
import { useMap } from "../../hooks";
import { MAP_TARGET_ID } from "../../lib";
import { usePolygon } from "../../hooks/usePolygon";

export const Map = () => {
  const { vectorLayer } = useMap();
  usePolygon(vectorLayer?.getSource() ?? null);

  return <div id={MAP_TARGET_ID} className={styles.map} />;
};
