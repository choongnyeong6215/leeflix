import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tv from "../pages/Tv";
import Search from "../pages/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
