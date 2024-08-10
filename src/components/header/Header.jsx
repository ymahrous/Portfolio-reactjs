import "./Header.css";
import CTA from "./CTA";
import Socials from "./Socials";
import ME from "../../assets/me.png";
import { RiScrollToBottomLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Your Name</h1>
        <h5 className="text-light">Job Title</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          <RiScrollToBottomLine />
        </a>
      </div>
    </header>
  )
}

export default Header;