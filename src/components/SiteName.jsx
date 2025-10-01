import { useLocation } from "react-router-dom";

const SiteName = () => {
  const location = useLocation();
  const path = location.pathname;
  const page = path.split("/")[1];
  console.log(page);
  let pageName = "";

  if (page === "search") {
    pageName = "Never";
  } else if (page === "") {
    pageName = "To-do List";
  } else if (page === "insta") {
    pageName = "게시물 테스트";
  }

  return (
    <h1
      className={`flex justify-center font-bold text-2xl ${
        page === "insta" ? "my-7" : ""
      } `}
    >
      {pageName}
    </h1>
  );
};

export default SiteName;
