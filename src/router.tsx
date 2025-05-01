import { Routes, Route } from "react-router";

import { Header, Layout } from "./components";
import { Information, Map, Statistics, InformationLoad } from "./pages";
import { Paths } from "./shared/constants";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout header={<Header />} />}>
        <Route path={Paths.loadInformation} element={<InformationLoad />} />
        <Route path={Paths.information} element={<Information />} />
        <Route path={Paths.map} element={<Map />} />
        <Route path={Paths.statistics} element={<Statistics />} />
      </Route>
    </Routes>
  );
};
