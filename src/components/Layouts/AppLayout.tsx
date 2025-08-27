import { Outlet } from "react-router-dom";
import AppNavBar from "../NavBar/AppNavBar";

function AppLayout() {
  return (
    <div className="layout">
      <AppNavBar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
export default AppLayout;