import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">SATYA SAI SUJAN <span className="last-name">Nadiminti</span></h1>
      <nav className="navbar">
        <Link to="/">ABOUT</Link>
        <Link to="/resume">RESUME</Link>
        <Link to="/work">WORK</Link>
</nav>

    </header>
  );
};

export default Header;

