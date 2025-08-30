import { ReactNode } from "react";
interface MenuItem {
  to: string;
  label: string;
  icon: ReactNode;
  danger?: boolean;
}

import { User, Calendar,  Lock } from "lucide-react"; 

const menuItems: MenuItem[] = [
  { to: "/PersonalInformation", label: "Personal Info", icon: <User  className="w-6 h-6" /> },
  { to: "/MyBooking", label: "My Booking", icon: <Calendar className="w-6 h-6"  /> },
  { to: "/AccountSecurity", label: "Account & Security", icon: <Lock className="w-6 h-6" /> },

];

export default menuItems;
