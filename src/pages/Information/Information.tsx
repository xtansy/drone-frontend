import styles from "./styles.module.scss";

import { type GridColDef } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";

import { PaperCustom, DataGridCustom } from "../../shared/ui";

interface MeasurementRow {
  id: number;
  organization: string;
  latitude: number;
  longitude: number;
  temperature: number;
  co2: number;
  humidity: number;
  pressure: number;
  measurementTime: string;
}

const generateRandomData = (): MeasurementRow[] => {
  const organizations = [
    "ВГУ",
    "ВГТУ",
    "ВГАСУ",
    "ВГМУ",
    "ВЭПИ",
    "ВГПУ",
    "Воронежская академия искусств",
    "НИИ Сельского Хозяйства",
    "Институт экологии",
    "Центр мониторинга природы",
  ];

  const data = [];

  for (let i = 0; i < 30; i++) {
    const time = new Date();
    time.setHours(time.getHours() - Math.random() * 48);

    data.push({
      id: i + 1,
      organization:
        organizations[Math.floor(Math.random() * organizations.length)],
      latitude: +(55.75 + Math.random() * 10).toFixed(4),
      longitude: +(37.61 + Math.random() * 10).toFixed(4),
      temperature: +(20 + (Math.random() * 15 - 5)).toFixed(1),
      co2: Math.floor(400 + Math.random() * 200),
      humidity: Math.floor(30 + Math.random() * 60),
      pressure: Math.floor(980 + Math.random() * 40),
      measurementTime: time.toISOString(),
    });
  }

  return data;
};

const rows: MeasurementRow[] = generateRandomData();

const columns: GridColDef<MeasurementRow>[] = [
  {
    field: "organization",
    headerName: "Организация",
    flex: 1,
    minWidth: 300,
  },
  {
    field: "latitude",
    headerName: "Широта",
    width: 100,
    valueFormatter: (value?: number) => `${value}°`,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "longitude",
    headerName: "Долгота",
    width: 100,
    valueFormatter: (value?: number) => `${value}°`,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "temperature",
    headerName: "Температура (°C)",
    width: 140,
    valueFormatter: (value?: number) => `${value}°C`,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "co2",
    headerName: "Уровень СО₂ (ppm)",
    width: 160,
    valueFormatter: (value?: number) => `${value} ppm`,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "humidity",
    headerName: "Влажность (%)",
    width: 140,
    valueFormatter: (value?: number) => `${value}%`,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "pressure",
    headerName: "Давление (hPA)",
    width: 140,
    valueFormatter: (value?: number) => `${value} hPA`,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "measurementTime",
    headerName: "Время измерения",
    width: 160,
    valueFormatter: (value: string) => new Date(value).toLocaleString(),
    flex: 1,
    minWidth: 200,
  },
];

export const Information = () => {
  return (
    <PaperCustom sx={{ marginTop: "50px" }}>
      <Typography className={styles.title} variant="h2">
        Мониторинговая таблица
      </Typography>

      <Box sx={{ height: "400px", width: "100%", overflow: "auto" }}>
        <DataGridCustom rows={rows} columns={columns} />
      </Box>
    </PaperCustom>
  );
};
