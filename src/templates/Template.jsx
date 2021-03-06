import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/adminNavbar/AdminNavbar";
import "./template.css";
import Menu from "../components/menu/Menu";
import SideMenuUser from "../components/sideMenuUser/SideMenuUser";

export default function Template() {

    return (
        <>
            <AdminNavbar />
            <div className="container">
                <div className="dashboard-container">
                    <div className="item side-menu">
                        <SideMenuUser />
                        <Menu />
                    </div>
                    <div className="item main-content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
