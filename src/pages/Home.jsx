import SiteName from "../components/SiteName";
import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <SiteName />
      <SearchBar />
      <TodoList />
    </>
  );
};

export default Home;
