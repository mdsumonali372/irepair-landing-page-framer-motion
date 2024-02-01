import { cn } from "@/lib/utils";
import { LayoutDashboardIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto p-5">
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "bg-gray p-2 rounded-md hover:bg-dark-gray hover:text-white transition-all flex gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboardIcon className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "bg-gray p-2 rounded-md hover:bg-dark-gray hover:text-white transition-all flex gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboardIcon className="shrink-0" />
          <span className="truncate">Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "bg-gray p-2 rounded-md hover:bg-dark-gray hover:text-white transition-all flex gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboardIcon className="shrink-0" />
          <span className="truncate">Service List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
