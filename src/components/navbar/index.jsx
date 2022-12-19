import { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#footer">Library</a>
    </p>
  </>
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="nav">
      <div className="nav-links">
        <div className="nav-links-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links-container">
          <Menu />
        </div>
      </div>
      <div className="nav-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className="nav-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav-menu-container scale-up-center">
            <div className="nav-menu-container-links">
              <Menu />
              <div className="nav-menu-container-links-sign">
                <p>Sign in</p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
