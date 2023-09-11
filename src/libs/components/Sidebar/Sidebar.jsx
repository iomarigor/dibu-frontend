import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import routes from "../../../pages/routes";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLogoutQuery } from "../../../hooks/useAuthQuery";
import { Button } from "react-bootstrap";
import LoginModal from "./modals/Login.Modal";

function Sidebar({ children, private_access }) {
  const [isToggled, setIsToggled] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const logoutQuery = useLogoutQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSidebarToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  const changeLoginModal = () => {
    setLoginModal(!loginModal);
  };
  return (
    <>
      <div id="wrapper" className={isToggled ? "toggled" : ""}>
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <div>
              <i className="fa fa-share-nodes"></i>SISDBU
            </div>
          </div>
          <ul
            className="sidebar-nav border-end border-secondary-subtle"
            style={{ height: "80%" }}
          >
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
              .filter((r) => r.private_access === private_access)
              .map((r, key) =>
                private_access ? (
                  <li
                    key={key}
                    className={
                      location.pathname === r.layout + r.path ? "active" : ""
                    }
                  >
                    <Link to={r.layout + r.path} style={{ alignItems: "left" }}>
                      <i className={r.icon}></i>
                      {r.name}
                    </Link>
                  </li>
                ) : (
                  key > 1 && (
                    <li
                      key={key}
                      className={
                        location.pathname === r.layout + r.path ? "active" : ""
                      }
                    >
                      <Link
                        to={r.layout + r.path}
                        style={{ alignItems: "left" }}
                      >
                        <i className={r.icon}></i>
                        {r.name}
                      </Link>
                    </li>
                  )
                )
              )}
            {private_access && (
              <li
                style={{
                  position: "absolute",
                  bottom: "0px",
                  width: "100%",
                  backgroundColor: "#d69180",
                }}
              >
                <a
                  href="#"
                  onClick={() => {
                    if (logoutQuery.isLoading) return;
                    logoutQuery.mutate(
                      {},
                      {
                        onSuccess: () => {
                          navigate("/");
                        },
                      }
                    );
                  }}
                >
                  <i className="fa fa-arrow-right-from-bracket"></i>
                  {logoutQuery.isLoading ? "Loading..." : "Cerrar Sesión"}
                </a>
              </li>
            )}
          </ul>
        </aside>

        <div
          id="navbar-wrapper"
          className="border-start border-secondary-subtle"
        >
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" onClick={handleSidebarToggle}>
                  <i className="fa fa-bars"></i>
                </a>
              </div>
              {!private_access && (
                <Button style={{ height: "100%" }} onClick={changeLoginModal}>
                  Ingresar <i className="fa-solid fa-door-open"></i>
                </Button>
              )}
            </div>
          </nav>
        </div>

        <section id="content-wrapper">{children}</section>
      </div>
      <LoginModal show={loginModal} handleClose={changeLoginModal} />
    </>
  );
}

export default Sidebar;
