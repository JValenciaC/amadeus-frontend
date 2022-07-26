import {  NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/Login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <a className="navbar-brand" to="/">
        <img
          src="data:image/svg;base64,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"
          width="50"
          height="50"
          alt=""
        />
      </a>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/SearchFlight"
          >
            Fligth
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/SearchHotel"
          >
            Hotel
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
        <ul className="navbar-nav ml-auto">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
            className="rounded-circle"
            width="40"
            height="40"
            alt="Avatar"
          />
          <span className="nav-item nav-link text-primary ">Jose Valencia</span>
          <button className="btn btn-outline-primary" onClick={onLogout}>
            Logout
          </button>

          {/* <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/login"
          >
            Logout
          </NavLink> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
