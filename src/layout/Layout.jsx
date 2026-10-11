import { Outlet } from "react-router";
import Drawer from "../components/Drawer";

export default function Layout() {
  return (
    <Drawer>
      <Outlet />
    </Drawer>
  );
}
