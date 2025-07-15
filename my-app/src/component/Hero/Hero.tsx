import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import Logo from "../../Images/Logo.png";

const Hero = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/Signin");
  };

  return (
    <div className="Main">
      <div className="hero">
        <div className="container-main">
          <header className="header ">
            <img src={Logo} alt="Backgound image" />
            <button onClick={handleSignIn}>Sign In</button>
          </header>
        </div>

        <div className="Text-center">
          <div className="myie">
            <h1>Unlimited movies, TV shows, and more</h1>
          </div>
          <h3>Starts at ₦2,500. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>

        <div className="Sctt">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="inptBox inputContent"
            required
          />
          <button className="StartButton">
            Get Started{" "}
            <span className="span">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
