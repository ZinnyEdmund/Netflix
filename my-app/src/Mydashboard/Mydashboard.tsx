import DashboardLayout from "../Dashboard/Layout";
import Topbar from "../Dashboard/Topbar/Topbar";
import Banner from "../Dashboard/Herobanner/Banner";
import Partiesrow from "../Dashboard/Partiesrow/Partiesrow";
import Watching from "../Dashboard/Continuewatching/Watching";

function Mydashboard() {
  return (
    <DashboardLayout>
      <Topbar />
      <Banner />
      <Partiesrow />
      <Watching />
    </DashboardLayout>
  );
}

export default Mydashboard;
