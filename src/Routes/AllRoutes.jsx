import { Routes, Route } from "react-router-dom";
import Admin from "../Pages/Admin";
import Landing from "../Pages/Landing";
import SinglePage from "../Pages/SinglePage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/:productID" element={<SinglePage />} />
    </Routes>
  );
}
