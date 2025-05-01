import styles from "./styles.module.scss";

import { FC, ReactNode } from "react";
import { Paper, type PaperProps } from "@mui/material";

interface PaperCustomProps extends PaperProps {
  children?: ReactNode;
}

export const PaperCustom: FC<PaperCustomProps> = ({ ...rest }) => {
  return <Paper className={styles.paper} variant="outlined" {...rest} />;
};
