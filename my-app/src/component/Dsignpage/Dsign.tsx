import Logo from "../../Images/Logo.png";
import "./dsign.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Dsign: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  //Navigate
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/Signup");
  };


  // Email validation using regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setSuccessMessage("");
      return;
    }

    // Basic validation
    if (!email.trim()) {
      setErrorMessage("Email is required!");
      setSuccessMessage("");
      return;
    }
    if (!password.trim()) {
      setErrorMessage("Password is required!");
      setSuccessMessage("");
      return;
    }

    // Clear previous error
    setErrorMessage("");

    //Stimulates a user account
    localStorage.setItem("user", JSON.stringify({ email, password }));

    setSuccessMessage("Signed up successfully!");
    setErrorMessage("");
    setShowMore(true);

    setEmail("");
    setPassword("");

    // // Clear messages after 5 seconds
    // setTimeout(() => {
    //   setEmail("");
    //   setPassword("");
    // }, 2000);
  };

  return (
    <div className="dsign-container">
      <div className="dsign-image">
        <img src={Logo} alt="Backgound image" />
      </div>

      <section className="DSIGNER-SECTION">
        <div className="dsign-content">
          <h1>Sign In</h1>
          <form className="Forms" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("Email:", e.target.value);
              }}
              autoComplete="off"
              placeholder="Email or mobile number"
            />
            <div className="Second_input">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log("Password:", e.target.value);
                }}
                autoComplete="off"
                placeholder="Password"
              />
              {errorMessage && <p className="error">{errorMessage}</p>}
              {successMessage && <p className="success">{successMessage}</p>}
            </div>
            <button className="signin">Sign In</button>
            <p>OR</p>
            <button className="Sigin_code">Use a Sign-In Code</button>
            <div className="forgotten_password">
              <a href="">Forgot password?</a>
            </div>
          </form>
          <div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="reading"
                name="interests"
                value="reading"
              />

              <label htmlFor="reading">Remember me</label>
            </div>
            <p className="Form_p1">
              New to Netflix?{" "}
              <a onClick={handleSignUp}>
                Sign up now.
              </a>
            </p>
            <p className="Form_p2">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>

            {!showMore && (
              <a
                href="#"
                onClick={() => setShowMore(true)}
                className="showmore"
              >
                Learn more.
              </a>
            )}
            {showMore && (
              <p className="showmore_p">
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <a href="#" className="showmore1">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="showmore1">
                  Terms of Service,
                </a>{" "}
                and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalized advertising by Google).
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dsign;
