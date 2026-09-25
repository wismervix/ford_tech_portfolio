import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", path: "/contact" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Brand Logo */}
        <NavLink to="/" onClick={closeMobileMenu} className="navbar__brand">
          <div className="navbar__logo">F</div>

          <h2 className="navbar__brand-name">FORD_TECH</h2>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="navbar__desktop-nav">
          <div className="navbar__nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `navbar__nav-link ${isActive ? "navbar__nav-link--active" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && <span className="navbar__nav-indicator" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* <button
            onClick={() => {
              // Your volunteer modal/action here
              closeMobileMenu();
            }}
            className="navbar__volunteer navbar__volunteer--desktop"
          >
            Volunteer
          </button> */}
          <AnimatedButton
            href="/assets/Akeh-Oghenemaro-CV.pdf"
            download="Akeh-Oghenemaro-CV.pdf"
          >
            {" "}
            Download CV{" "}
          </AnimatedButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navbar__menu-button"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-menu">
          <div className="navbar__mobile-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `navbar__mobile-link ${
                    isActive ? "navbar__mobile-link--active" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* <button
              onClick={() => {
                // Your volunteer modal/action here
                closeMobileMenu();
              }}
              className="navbar__volunteer navbar__volunteer--mobile"
            >
              Volunteer Now
            </button> */}
            <AnimatedButton
              href="/assets/Akeh-Oghenemaro-CV.pdf"
              download="Akeh-Oghenemaro-CV.pdf"
            >
              {" "}
              Download CV{" "}
            </AnimatedButton>
          </div>
        </div>
      )}
    </nav>
  );
};
