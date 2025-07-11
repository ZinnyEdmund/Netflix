// import React from 'react'
import bg from "../../Images/bg.png";

import { useState } from "react";

const Dsign: React.FC = () => {

    const [showMore, setShowMore] = useState(false);

    return (
    <div className="dsign-container">
      <div>
        <img src={bg} alt="background image" />
      </div>

      <section>
        <div>
          <h1>Sign In</h1>
          <div>
            <input type="text" />
            <input type="text" />
            <button>Sign In</button>
            <p>OR</p>
            <button>Use a Sign-In-Code</button>
            <a href="">Forgot password?</a>
          </div>
          <div>
            <input
              type="checkbox"
              id="reading"
              name="interests"
              value="reading"
            />
            <label htmlFor="reading">Remember me</label>
            <br></br>
            <p>New to Netflix? <a href="">Sign up now.</a></p>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

            {!showMore && (
                <a href="#" onClick={() => setShowMore(true)}>Learn more.</a>
            )}
            {showMore && (
                <p>The information collected by Google reCAPTCHA is subject to the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service,</a> and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
export default Dsign;