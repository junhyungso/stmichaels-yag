import { Link } from 'react-router-dom';
import logo from '../../assets/stmichaelslogo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="home-nav">
        <Link to="/">
          <img width={60} src={logo} alt="logo" />
        </Link>
      </nav>
      <ul className="ul">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/prayer-intentions">Prayer Intentions</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
