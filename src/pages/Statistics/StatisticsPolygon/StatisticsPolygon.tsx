import styles from "./styles.module.scss";

import { FC, useEffect, useState } from "react";

import { Stack, Box, Typography, Paper } from "@mui/material";

import { getPolygonById } from "../../../shared/api";
import { type PolygonModel } from "../../../shared/types";
import {
  MiniMap,
  MetricPolygonCards,
  PolygonPoints,
} from "../../../components";

interface StatisticsPolygonProps {
  polygonId: string;
}

export const StatisticsPolygon: FC<StatisticsPolygonProps> = ({
  polygonId,
}) => {
  const [polygon, setPolygon] = useState<PolygonModel | null>(null);

  useEffect(() => {
    getPolygonById(polygonId).then(({ data }) => {
      setPolygon(data);
    });
  }, [polygonId]);

  if (!polygon) return null;

  return (
    <Stack sx={{ marginTop: "5px" }} spacing={"15px"}>
      <Box>
        <Typography
          variant="h2"
          sx={{ fontSize: "20px", color: "var(--primary-color)" }}
        >
          Принадлежность полигона:{" "}
          <span style={{ color: "var(--white-color)" }}>
            {polygon?.organizationPoint.name}
          </span>
        </Typography>
      </Box>

      {/* Мини-карта */}
      <Paper
        className={styles.miniMapWrapper}
        sx={{
          margin: "15px 0 0 0 !important",
          p: 2,
          pt: 1,
          backgroundColor: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <Typography variant="h6" sx={{ color: "var(--primary-color)", mb: 1 }}>
          Местоположение на карте
        </Typography>
        <MiniMap polygon={polygon} />
      </Paper>

      <MetricPolygonCards polygon={polygon} />

      <PolygonPoints points={polygon.points} />
    </Stack>
  );
};
