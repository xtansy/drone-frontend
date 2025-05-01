import styles from "./styles.module.scss";

import { Typography } from "@mui/material";
import { Map } from "../../components";
import { PaperCustom } from "../../shared/ui";

export const MapPage = () => {
  return (
    <PaperCustom sx={{ marginTop: "20px" }}>
      <Typography className={styles.title} variant="h2">
        Карта
      </Typography>
      <Map />
    </PaperCustom>
  );
};
