import { Link } from "react-router-dom";
// import "./App.css";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      links=
      {[
        <Link key={1} className="nav-link text-light" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          Portfolio
        </Link>,
        <Link key={1} className="nav-link text-light" to="/">
          Contact
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          Resume
        </Link>,
      ]}
          </ul>
        </div>
      </div>
    </nav>
  );
};


