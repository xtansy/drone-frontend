import { useSearchParams } from "react-router";

import { StatisticsSummary } from "./StatisticsSummary/StatisticsSummary";
import { StatisticsPoint } from "./StatisticsPoint/StatisticsPoint";
import { StatisticsPolygon } from "./StatisticsPolygon/StatisticsPolygon";

export const Statistics = () => {
  const [searchParams] = useSearchParams();

  const entityType = searchParams.get("entityType");
  const entityId = searchParams.get("entityId");

  console.log("@@ entityType", entityType);
  console.log("@@ entityId", entityId);

  if (entityType === "point" && entityId) return <StatisticsPoint />;
  if (entityType === "polygon" && entityId) return <StatisticsPolygon />;

  return <StatisticsSummary />;
};
