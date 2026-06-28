import styles from "./styles.module.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Typography, Box } from "@mui/material";

import { PaperCustom, DataGridCustom, LoaderDrone } from "../../shared/ui";
import { getAllPoints } from "../../shared/api";
import { columns, type PointRow } from "./constants";
import { converter } from "./converter";

export const Information = () => {
  const [points, setPoints] = useState<PointRow[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    getAllPoints()
      .then((res) => {
        const rows = converter(res.data);
        setPoints(rows);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleRowClick = (lon: number, lat: number) => {
    navigate(`/map?lon=${lon}&lat=${lat}`);
  };

  return (
    <PaperCustom sx={{ marginTop: "50px" }}>
      <Typography className={styles.title} variant="h2">
        Мониторинговая таблица
      </Typography>

      {!isLoading ? (
        <Box sx={{ height: "100%", width: "100%", overflow: "auto" }}>
          <DataGridCustom
            rows={points}
            columns={columns}
            onRowClick={(params) => {
              const { longitude, latitude } = params.row;
              handleRowClick(longitude, latitude);
            }}
          />
        </Box>
      ) : (
        <LoaderDrone text="Загрузка данных для таблицы..." />
      )}
    </PaperCustom>
  );
};
