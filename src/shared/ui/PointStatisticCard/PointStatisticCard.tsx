import { FC, ReactNode } from "react";
import { useNavigate } from "react-router";
import { Box, Paper, Stack, Typography } from "@mui/material";
import {
  PlaceOutlined,
  ThermostatOutlined,
  WaterDropOutlined,
  Co2,
  SpeedOutlined,
} from "@mui/icons-material";

import { ButtonCustom } from "../ButtonCustom/ButtonCustom";
import { Paths } from "../../constants";
import { formatCoordinates } from "../../../components/Map/lib";

// Строка метрики: иконка (в цвете метрики) + подпись + значение
const MetricRow: FC<{ icon: ReactNode; label: string; value: string }> = ({
  icon,
  label,
  value,
}) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    {icon}
    <Typography sx={{ fontSize: "13px" }}>
      {label}: {value}
    </Typography>
  </Stack>
);

// Цвета метрик синхронизированы с графиком в PointCardInfo
const iconSx = (color: string) => ({ fontSize: 16, color });

interface PointStatisticCardProps {
  pointId: string;
  latitude: number;
  longitude: number;
  temperature: string;
  co2_level: string;
  humidity: string; // влажность
  pressure: string; // давление
}

export const PointStatisticCard: FC<PointStatisticCardProps> = ({
  latitude,
  longitude,
  temperature,
  co2_level,
  humidity,
  pressure,
  pointId,
}) => {
  const navigate = useNavigate();

  const onClickPointMoreStat = () => {
    navigate({
      pathname: Paths.statistics,
      search: `entityType=point&entityId=${pointId}`,
    });
  };

  return (
    <Paper
      sx={{
        marginTop: "0px !important",
        backgroundColor: "var(--card-bg-color)",
        border: "1px solid var(--glow-color)",
        boxShadow: "0 0 10px var(--glow-color)",
        borderRadius: "12px",
        p: 2,
        color: "var(--white-color)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 0 15px var(--accent-color)",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "var(--accent-color)",
          mb: 1,
          fontSize: "16px",
        }}
      >
        Точка: {pointId}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
        <PlaceOutlined sx={iconSx("var(--primary-color)")} />
        <Typography sx={{ fontSize: "14px" }}>
          Координаты: {formatCoordinates([longitude, latitude], 4)}
        </Typography>
      </Stack>

      <Box mt={1}>
        <Typography
          variant="body2"
          sx={{ fontSize: "13px", color: "var(--primary-color)", mb: 0.5 }}
        >
          Средние значения:
        </Typography>
        <Stack spacing={0.5}>
          <MetricRow
            icon={<ThermostatOutlined sx={iconSx("#00ffff")} />}
            label="Температура"
            value={`${temperature} °C`}
          />
          <MetricRow
            icon={<WaterDropOutlined sx={iconSx("#66ff66")} />}
            label="Влажность"
            value={`${humidity} %`}
          />
          <MetricRow
            icon={<Co2 sx={iconSx("#ff3366")} />}
            label="CO₂"
            value={`${co2_level} ppm`}
          />
          <MetricRow
            icon={<SpeedOutlined sx={iconSx("#ffa500")} />}
            label="Давление"
            value={`${pressure} мм`}
          />
        </Stack>
      </Box>

      <ButtonCustom
        sx={{ mt: 2, width: "100%" }}
        onClick={onClickPointMoreStat}
      >
        Подробная статистика
      </ButtonCustom>
    </Paper>
  );
};
