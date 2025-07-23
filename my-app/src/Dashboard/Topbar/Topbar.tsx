import "./Topbar.css";
import { CiSearch } from "react-icons/ci";
import { BsMic } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiMessage } from "react-icons/ti";import Zee from '../../Images/Zee.png'

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="Topbar_content">
        <div className="topbar_left">
        <span>
          {" "}
          <CiSearch />
        </span>
        <input type="text" placeholder="Search..." className="Topbar_input" />
        <span>
          {" "}
          <BsMic />
        </span>
      </div>

      <div className="topbar_right">
        <span><IoMdNotificationsOutline /></span>
        <span><TiMessage /> </span>
        <div>
          <img src={Zee} alt="avatar" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Topbar;
