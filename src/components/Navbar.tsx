import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Programmes", path: "/programmes" },
    { label: "Gallery", path: "/gallery" },
    { label: "Publications", path: "/publications" },
    { label: "Partners", path: "/partners" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Brand Logo */}
        <NavLink to="/" onClick={closeMobileMenu} className="navbar__brand">
          <div className="navbar__logo">B</div>

          <div className="navbar__brand-text">
            <span className="navbar__brand-name">BEDROCK</span>

            <span className="navbar__brand-subtitle">
              HUMAN DEVELOPMENT FOUNDATION
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="navbar__desktop-nav">
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

          <button
            onClick={() => {
              // Your volunteer modal/action here
              closeMobileMenu();
            }}
            className="navbar__volunteer navbar__volunteer--desktop"
          >
            Volunteer
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navbar__menu-button"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
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

            <button
              onClick={() => {
                // Your volunteer modal/action here
                closeMobileMenu();
              }}
              className="navbar__volunteer navbar__volunteer--mobile"
            >
              Volunteer Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
