import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Preview from "../pages/Preview";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch" element={<Preview />} />
    </Routes>
  );
};

export default AppRoutes;
