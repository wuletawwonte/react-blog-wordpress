import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import "./dashboard.css";
import Menu from "../../components/menu/Menu";
import SideMenuUser from "../../components/sideMenuUser/SideMenuUser";
import AdminContentHeader from "../../components/adminContentHeader/AdminContentHeader";
import AdminContentPosts from "../../components/adminContentPosts/AdminContentPosts";

export default function Dashboard() {

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
            <AdminContentHeader />
            <AdminContentPosts />
          </div>
        </div>
      </div>
    </>
  );
}
