import { ReactNode } from "react";
interface MenuItem {
  to: string;
  label: string;
  icon: ReactNode;
  danger?: boolean;
}

import { User, Calendar, Globe, Lock, LogOut } from "lucide-react"; 

const menuItems: MenuItem[] = [
  { to: "/PersonalInformation", label: "Personal Info", icon: <User /> },
  { to: "/Bookings", label: "My Booking", icon: <Calendar /> },
  { to: "/Language", label: "App Language", icon: <Globe /> },
  { to: "/Security", label: "Account & Security", icon: <Lock /> },
  { to: "/signin", label: "Logout", icon: <LogOut />, danger: true },
];

export default menuItems;
