import { Routes, Route } from "react-router-dom";
import Preview from "../components/Preview";
import Home from "../pages/Home";
import Info from "../pages/Info";
import RegisterBook from "../pages/RegisterBook";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":bookId" element={<Preview />} />
      </Route>
      <Route path="/book/:bookId" element={<Info />} />
      <Route path="/register" element={<RegisterBook />} />

      <Route path="*" element={<h1>404 pagina não encontrada</h1>} />
    </Routes>
  );
};
// LINK
// useNavigate

export default AppRoutes;
