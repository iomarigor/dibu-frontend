import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSessionStore } from "../store/Session.store";
export const PublicRoute = ({ children, redirectTo = "/" }) => {
  //const session = useSessionStore((state) => state.session);
  const navigate = useNavigate();
  const isAuth = useSessionStore((state) => state.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/panel");
    }
  }, [isAuth]);
  return (
    <>
      <Sidebar private_access={false}>
        {children ? <>{children}</> : <Outlet />}
      </Sidebar>
    </>
  );
};
