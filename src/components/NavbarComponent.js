import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../Context";
import logo from '../assets/logo.png';
import './NavbarComponent.css';

export default function NavbarComponent() {
  const context = useContext(MyContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              style={{ height: '50px', width: 'auto', maxWidth: '100%' }}
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className="nav-link text-white nav-item-large "
                  activeClassName="active" id="a"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/rooms"
                  className="nav-link text-white nav-item-large"
                  activeClassName="active" id="a"
                >
                  Rooms
                </NavLink>
              </li>

              {context.isUserAuthenticated ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link text-white nav-item-large"
                      role="button"
                      onClick={() => {
                        context.logout();
                        window.location.reload();
                      }}
                      activeClassName="active" id="a"
                    >
                      Logout
                    </NavLink>
                  </li>

                  {context.isAdmin && (
                    <li className="nav-item">
                      <NavLink
                        to="/dashboard"
                        className="nav-link text-white nav-item-large"
                        activeClassName="active" id="a"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  )}
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link text-white nav-item-large"
                      activeClassName="active" id="a"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link text-white nav-item-large"
                      activeClassName="active" id="a"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
