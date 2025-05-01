import styles from "./styles.module.scss";

import { useMap } from "../../hooks";
import { MAP_TARGET_ID } from "../../lib";

export const Map = () => {
  useMap();

  return <div id={MAP_TARGET_ID} className={styles.map} />;
};
