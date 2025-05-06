import { useParams } from "react-router";

export const Statistics = () => {
  const params = useParams();
  console.log("@@ params", params);
  return <div>Statistics</div>;
};
