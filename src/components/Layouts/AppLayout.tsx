import { Outlet } from "react-router-dom";
import AppNavBar from "../NavBar/AppNavBar";
import { AppCheckoutProvider } from "@/context/AppCheckoutProvider";

function AppLayout() {
  return (
    <AppCheckoutProvider>
      <div className="layout">
        <AppNavBar />
        <mainS>
          <Outlet />
        </mainS>
      </div>
    </AppCheckoutProvider>
  );
}
export default AppLayout;
