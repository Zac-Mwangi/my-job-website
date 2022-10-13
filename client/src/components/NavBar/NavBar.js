import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/jobs" activeStyle>
            Jobs
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/post-job" activeStyle>
            Post Job
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/login" className="btn btn-primary btn-sm active">
            Login
          </NavBtnLink>
          <NavBtnLink to="/sign-up" className="btn btn-primary btn-sm active">
            Sign Up
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
