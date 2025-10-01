import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Insta from "./pages/Insta";
import ProfileForm from "./pages/ProfileForm";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/insta" element={<Insta />} />
          <Route path="/profile" element={<ProfileForm />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
