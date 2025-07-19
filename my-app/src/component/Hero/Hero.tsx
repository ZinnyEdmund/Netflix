import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./hero.css";
import Logo from "../../Images/Logo.png";

const Hero = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/Signin");
  };
  const handleSignUp = () => {
    if (!email.trim()) {
      alert("Email is required!");
      return;
    }

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    navigate("/Signup");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="inptBox inputContent"
            required
          />
          <button className="StartButton" onClick={handleSignUp}>
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
