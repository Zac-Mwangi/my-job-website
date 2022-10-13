import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ setUser, user }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        window.location = "/log-in";
      }
    });
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/jobs-page">Jobs</NavLink>
          {/* <NavLink to="/contact">Contact Us</NavLink> */}

          {user ? (
            <>
              <NavLink to="/post-job">Post Job</NavLink>
            </>
          ) : (
            <></>
          )}
        </NavMenu>

        <NavBtn>
          {user ? (
            <>
              <NavBtnLink
                to="/logout"
                className="btn btn-primary btn-sm active"
                onClick={() => handleLogoutClick()}
              >
                Logout
              </NavBtnLink>
            </>
          ) : (
            <>
              <NavBtnLink to="/log-in" className="btn btn-primary btn-sm active">
                Login
              </NavBtnLink>
              <NavBtnLink
                to="/sign-up"
                className="btn btn-primary btn-sm active"
              >
                Sign Up
              </NavBtnLink>
            </>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
