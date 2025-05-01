import styles from "./styles.module.scss";

import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box className={styles.footer} component="footer">
      <Typography className={styles.text}>
        © 2025 HmelDrone. All rights reserved.
      </Typography>
    </Box>
  );
};
