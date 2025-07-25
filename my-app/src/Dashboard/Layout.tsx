import Sidebar from "./Sidebar/Sidebar";
import Avatar from "./Avatarsidebar/Avatar";

const DashboardLayout = ({ children } : {children : React.ReactNode}) => {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      {/* LEFT SIDEBAR */}
      <div style={{ width: "240px", borderRight: "1px solid #01060fff", backgroundColor: "#fff" }}>
        <Sidebar />
        <Avatar />
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#f9f9f9" }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
