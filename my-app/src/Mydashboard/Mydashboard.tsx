import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Topbar from "../Dashboard/Topbar/Topbar";



function Mydashboard() {
  return (
    <div className="dashboardBg">
        <Sidebar />
        <Topbar />
    </div>
  );
}

export default Mydashboard;