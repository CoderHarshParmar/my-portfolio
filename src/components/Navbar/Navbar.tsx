
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Download,
  ArrowUpRight,
} from "lucide-react";
import "./Navbar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "My Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const RESUME_URL = "/resume/Harsh-Resume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="logo-symbol">H.</span>
          <span>
            HARSH<span className="logo-dot">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {isActive && (
                    <motion.span
                      className="nav-indicator"
                      layoutId="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Navbar Actions */}
        <div className="navbar-actions">

          {/* Desktop Resume Download */}
        <a
          href="/resume/HARSH_PARMAR_RESUME.pdf"
          download="HARSH_PARMAR_RESUME.pdf"
          className="resume-button"
        >
          <span>Resume</span>
        </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.07 }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.name}
                  <ArrowUpRight size={17} />
                </NavLink>
              </motion.div>
            ))}

            {/* Mobile Resume Download */}
           <a
            href="/resume/HARSH_PARMAR_RESUME.pdf"
            download="HARSH_PARMAR_RESUME.pdf"
            className="mobile-resume"
          >
            Download Resume <Download size={16} />
          </a>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
