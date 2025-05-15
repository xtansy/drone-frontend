import { FC, useEffect, useState } from "react";

import { Stack, Box, Typography } from "@mui/material";

import { getPolygonById } from "../../../shared/api";
import { type PolygonModel } from "../../../shared/types";
import { MiniMap } from "../../../components";

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

  console.log("@@ polygon", polygon);

  if (!polygon) return null;

  return (
    <Stack sx={{ marginTop: "5px" }} spacing={4}>
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

      <Box>
        <MiniMap polygon={polygon} />
      </Box>
    </Stack>
  );
};
