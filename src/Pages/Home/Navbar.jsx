import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu(); // Panggil fungsi closeMenu dengan tanda kurung ()
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu(); // Panggil fungsi closeMenu dengan tanda kurung ()
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/hiclean.svg" alt="Hi Clean" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <a
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/"
              className="navbar--content"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/Contactus"
              className="navbar--content"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
              href="/About"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Services" 
              className="navbar--content"
              href="Services"
            >
              Services
            </a>
          </li>   

          <li>
            <a
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Harga" 
              className="navbar--content"
              href="Harga"
            >
              Prices
            </a>
          </li>  


        </ul>
      </div>
      <a className="btn btn-outline-primary" href="Registrasion">Sign Up</a>

      {/* <Link 
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        link to="Registration" 
        className="btn btn-outline-primary">
        Sign Up or Log In 
      </Link> */}
    </nav>
    
  );
}

export default Navbar;
