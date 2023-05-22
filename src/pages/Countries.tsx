import { useLocation } from "react-router-dom";

export default function Countries() {
  const location = useLocation();
  console.log(location.state);
  return <div>Countries</div>;
}
