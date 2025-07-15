import Logo from "../../Images/Logo.png";
import "./dsign.css";
import { useState } from "react";

const Dsign: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="dsign-container">
      <div className="dsign-image">
        <img src={Logo} alt="Backgound image" />
      </div>

      <section className="DSIGNER-SECTION">
        <div className="dsign-content">
          <h1>Sign In</h1>
          <form className="Forms">
            <input type="text" placeholder="Email or mobile number" />
            <div className="Second_input">
              <input type="text" placeholder="Password" />
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
              New to Netflix? <a href="">Sign up now.</a>
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
                Google <a href="#" className="showmore1">Privacy Policy</a> and{" "}
                <a href="#" className="showmore1">Terms of Service,</a> and is used for providing,
                maintaining, and improving the reCAPTCHA service and for general
                security purposes (it is not used for personalized advertising
                by Google).
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dsign;
