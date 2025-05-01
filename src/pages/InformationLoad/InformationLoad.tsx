import styles from "./styles.module.scss";

import { Box, Typography } from "@mui/material";

import { PaperCustom, FileUploader, DroneSdCard } from "../../shared/ui";

export const InformationLoad = () => {
  return (
    <PaperCustom sx={{ marginTop: "50px" }}>
      <Box className={styles.wrapper}>
        <Box className={styles.uploadBlock}>
          <Typography className={styles.title} variant="h2">
            Загрузка данных с <span>SD-карты</span>
          </Typography>
          <Typography className={styles.descr} variant="h2">
            для загрузки используйте форму ниже
          </Typography>
          <FileUploader />
        </Box>
        <DroneSdCard />
      </Box>
    </PaperCustom>
  );
};
