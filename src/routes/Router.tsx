import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tv from "../pages/Tv";
import Search from "../pages/Search";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
