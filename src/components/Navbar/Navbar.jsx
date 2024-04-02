import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import GradientBtn from "../../components/Buttons/GradientBtn";
import { getAuth, signOut } from "firebase/auth";
function Navbar() {
  const auth = getAuth();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div id="navbar">
      <section id="side-panel">
        <div className="panel-container">
          <Link className="panel-nav-link" to="add-notice">
            <GradientBtn text={"Add Notice"} icon={"add"} />
          </Link>
          <br />
          <hr width="100%" color="#BAB8DD" />
          <div className="navigation">
            <NavLink activeClassName="active" to="/" className="panel-nav-link">
              Complaints
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/notices"
              className="panel-nav-link"
            >
              Notices
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/out-pass"
              className="panel-nav-link"
            >
              Out Passes
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/leave-form"
              className="panel-nav-link"
            >
              Leave Forms
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/mess-feedback"
              className="panel-nav-link"
            >
              Mess Feedback
            </NavLink>
          </div>
          <hr width="100%" color="#BAB8DD" />
          <div className="options">
            <NavLink
              activeClassName="active"
              to="/Account-settings"
              className="panel-nav-link"
            >
              <span className="material-symbols-outlined btn-icon">
                settings
              </span>
              <span>Account Settings</span>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="panel-nav-link"
              onClick={handleLogOut}
            >
              <span className="material-symbols-outlined btn-icon">logout</span>
              <span>log Out</span>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
