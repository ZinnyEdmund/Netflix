import "./Dsignup.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebaseConfig"; // adjust if needed
import { useNavigate } from "react-router-dom";
import Logo from "../../Images/Logo.png";

const Dsignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic check
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const Auth = getAuth(auth);
      const userCredential = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );
      console.log("User created:", userCredential.user);
      navigate("/dashboard"); // you'll build this later
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  return (
    <div className="dsignup-container">
      <div className="Dsignup_logo">
        <img src={Logo} alt="Logo" />
      </div>

      <section className="DSIGNER-SECTION">
        <div className="dsign-content">
          <h1>Sign Up</h1>
          <form className="My_Forms" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
              className="inputContent1"
            />

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="inputContent2"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                className="inputContent3"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="off"
                className="inputContent4"
              />
            </div>
            <button className="signup">Sign Up</button>
          </form>
          <p className="signup-text">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dsignup;
