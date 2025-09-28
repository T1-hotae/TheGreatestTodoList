import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
