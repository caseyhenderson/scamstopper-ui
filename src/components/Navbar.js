import { useState } from "react";
import "../styles/navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
    // fix logo display issue - replace with custom icon
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Scamstopper!
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <MenuIcon/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/">
                <p> Home </p>
            </Link>
          </li>
          <li>
          <Link to="/usefulInfo">
                <p> Useful Info </p>
            </Link>
          </li>
          <li>
          <Link to="/about">
                <p> About </p>
            </Link>
          </li>
          <li>
          <Link to="/upload">
                <p> Upload </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}