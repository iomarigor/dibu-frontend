import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import routes from "../../../pages/routes";
import { Link } from "react-router-dom";
function Sidebar({ children }) {
  const [isToggled, setIsToggled] = useState(false);
  const handleSidebarToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  return (
    <div id="wrapper" className={isToggled ? "toggled" : ""}>
      <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
          <h2>Logo</h2>
        </div>
        <ul class="sidebar-nav">
          {/* <li class="active">
            <a href="#">
              <i class="fa fa-home"></i>Home
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-plug"></i>Plugins
            </a>
          </li>*/}
          {routes
            .filter((r) => r.private_access)
            .map((r, key) => (
              <li key={key}>
                <Link to={r.layout + r.path} style={{ alignItems: "left" }}>
                  <i className={r.icon}></i>
                  {r.name}
                </Link>
              </li>
            ))}
        </ul>
      </aside>

      <div id="navbar-wrapper">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" onClick={handleSidebarToggle}>
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>

      <section id="content-wrapper">{children}</section>
    </div>
  );
}

export default Sidebar;
