import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface MetricBadgeProps {
  value: string;
  unit: string;
  // ReactNode — чтобы в подпись можно было передать иконку, а не только текст
  label: ReactNode;
}

export const MetricBadge: FC<MetricBadgeProps> = ({ value, unit, label }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      p: "4px 8px",
      borderRadius: "4px",
      bgcolor: "var(--border-color)",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>{label}</Box>

    <Typography
      variant="body2"
      sx={{
        fontSize: "0.75rem",
        color: "var(--accent-color)",
        fontWeight: "bold",
      }}
    >
      {value}
      {unit}
    </Typography>
  </Box>
);
