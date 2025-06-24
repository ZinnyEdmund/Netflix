import { IoIosArrowForward } from "react-icons/io";
import './Footer.css'


function Footer() {
  return (
    <div className="content">
        <div className="sect">
          <p className="watchiee">Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className="Sctt">
          <input type="email" name="email" placeholder="Email address" className="inptBox inputContent"/>
          <button className="StartButton">Get Started <span className="span"><IoIosArrowForward /></span></button>
        </div>

        <div className="container">
          <ul className="lite">
            <li><a href="#">Questions? Contact us.</a></li>
          </ul>
          <div className="footer">
            <div className="footer-column">
              <ul>
                <li><a href="https://help.netflix.com/en/node/412">FAQ</a></li>
                <li><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></li>
                <li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                <li><a href="https://fast.com/">Speed Test</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <ul>
                <li><a href="https://help.netflix.com/en">Help Center</a></li>
                <li><a href="https://jobs.netflix.com/">Job</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <ul>
                <li><a href="https://www.netflix.com/ng/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Accounts</a></li>
                <li><a href="https://help.netflix.com/en/node/14361">Ways to Watch</a></li>
                <li><a href="https://help.netflix.com/en/node/134094">Corporate Information</a></li>
                <li><a href="https://www.netflix.com/ng/browse/genre/839338">Only on Netflix</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <ul>
                <li><a href="https://media.netflix.com/en/">Media Center</a></li>
                <li><a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                <li><a href="https://help.netflix.com/en/contactus">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footing">
            <select name="colors" id="colors" className="Lastie">
              <option value="red" >English </option>
            </select>
            <p className="p1">Netflix Nigeria</p>
            <p className="p2">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn More.</a></p>
        </div>
    </div>
  )
}

export default Footer;