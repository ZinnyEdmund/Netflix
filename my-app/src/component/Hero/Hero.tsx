import { IoIosArrowForward } from "react-icons/io";
import './hero.css'
import Logo from '../../Images/Logo.png';

function Hero() {
  return (
    <div className="Main">
        <div className="hero">
            <header className="header">
                <img src={Logo} alt="Backgound image" />
                <button>Sign In</button>
            </header>

            <div className="Text-center">
                <h1>Unlimited movies, <br /> TV shows, and <br /> more</h1>
                <h3>Starts at ₦2,500. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>

            <div className="Sctt">
                <input type="email" name="email" placeholder="Email address" className="inptBox inputContent"/>
                <button className="StartButton">Get Started <span className="span"><IoIosArrowForward /></span></button>
            </div>
        </div>
    </div>
    
  )
}

export default Hero