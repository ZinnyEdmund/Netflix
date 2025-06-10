import { IoIosArrowForward } from "react-icons/io";
import './Footer.css'


function Footer() {
  return (
    <div>
        <div className="sect">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className="Sctt">
          <input type="email" name="email" placeholder="Email address" className="inptBox inputContent"/>
          <button className="StartButton">Get Started <span className="span"><IoIosArrowForward /></span></button>
        </div>
    </div>
  )
}

export default Footer