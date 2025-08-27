import { Outlet } from "react-router-dom";
import AppNavBar from "../NavBar/AppNavBar";
import { AppCheckoutProvider } from "@/context/AppCheckoutProvider";

function AppLayout() {
  return (
    <AppCheckoutProvider>
      <div className="layout">
        <AppNavBar />
        <main className="flex-1 flex flex-col justify-center">
          <Outlet />
        </main>
      </div>
    </AppCheckoutProvider>
  );
}
export default AppLayout;
