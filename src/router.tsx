import { Routes, Route, Navigate } from "react-router";

import { Layout, Header, Footer } from "./components";
import { Information, MapPage, Statistics, InformationLoad } from "./pages";
import { Paths } from "./shared/constants";
import { api } from "./shared/api";

export const Router = () => {
  console.log("@@ process.env.NODE_ENV", process.env.NODE_ENV);
  console.log("@@ import.meta.env.PROD", import.meta.env.PROD);
  return (
    <Routes>
      <Route element={<Layout header={<Header />} footer={<Footer />} />}>
        <Route
          path="/"
          element={<Navigate to={Paths.informationLoad} replace />}
        />
        <Route path={Paths.informationLoad} element={<InformationLoad />} />
        <Route path={Paths.information} element={<Information />} />
        <Route path={Paths.map} element={<MapPage />} />
        <Route path={Paths.statistics} element={<Statistics />} />
      </Route>
    </Routes>
  );
};
