import Logo from "../../Images/Logo.png";
import "./dsign.css";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../firebaseConfig";


const Dsign: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");

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
  e.preventDefault();

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!email.trim() || !password.trim()) {
    alert("Email and password are required!");
    return;
  }

  try {
    const auth = getAuth(app);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("AUTH:", auth); // ← place this before signInWithEmailAndPassword

    console.log("Logged in:", userCredential.user);
    navigate("/Mydashboard"); // Will direct the user to the dashboard after successful login
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Login failed:", error.message);
      alert("Login failed: " + error.message);
    } else {
      console.error("Login failed:", error);
      alert("Login failed: " + String(error));
    }
  }
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
              {/* {errorMessage && <p className="error">{errorMessage}</p>}
              {successMessage && <p className="success">{successMessage}</p>} */}
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
