import { useSelector } from "react-redux";
import "./SiteName.css";

const SiteName = () => {
  const { page } = useSelector((state) => state.page);
  return (
    <h1 className="SiteName">{page === "todo" ? "To-do List" : "Never"}</h1>
  );
};

export default SiteName;
