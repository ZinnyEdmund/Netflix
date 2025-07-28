// DashboardLayout.tsx
import './layout.css'
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Avatar from "../Avatarsidebar/Avatar";
import { FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false); 

  return (
    <>
      {/* Hamburger Icon (Mobile only) */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="hamburger"
      >
        {showSidebar ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div style={{ display: "flex", height: "100vh", width: "100%" }}>
        {/* SIDEBAR & AVATAR TOGETHER */}
        <div
          className={`sidebar-container ${showSidebar ? "show" : "hide"}`}
        >
          <Sidebar show={showSidebar} />
          <Avatar />
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#f9f9f9" }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
