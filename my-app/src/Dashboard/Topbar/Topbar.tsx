import "./Topbar.css";
import { CiSearch } from "react-icons/ci";
import { RiMic2Fill } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="topbar">
      <div>
        <span>
          {" "}
          <CiSearch />
        </span>
        <input type="text" placeholder="Search..." className="Topbar_input" />
        <span>
          {" "}
          <RiMic2Fill />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
