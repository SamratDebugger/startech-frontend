import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import Offers from "./pages/Offers";
import Deals from "./pages/Deals";
import Compare from "./pages/Compare";
import PcBuilder from "./pages/PcBuilder";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/pcbuilder" element={<PcBuilder />} />
        </Route>
      </Routes>
    </>
  );
}
