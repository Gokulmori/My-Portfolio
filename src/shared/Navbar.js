import profileImg from "../assets/img/profile.jpg";
import { NavLink } from "react-router-dom";
import navItems from "./nav-items";

function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      {/* Brand */}
      <a
        className="navbar-brand"
        href="#page-top"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("page-top");
        }}
      >
        <span className="d-block d-lg-none">Gokul Mori</span>

        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={profileImg}
            alt="Gokul Mori"
          />
        </span>
      </a>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav Items */}
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          {navItems.map((item) => (
            <li className="nav-item" key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "")
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
