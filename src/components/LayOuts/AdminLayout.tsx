import SideBar from "@/pages/admin/SideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <SideBar />
      <div className="col-span-10 h-full px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
