import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthQuery } from "../hooks/useAuthQuery";

export const ProtectedRoute = ({ children, redirectTo = "/" }) => {
  //const session = useSessionStore((state) => state.session);
  const authQuery = useAuthQuery();
  const navigate = useNavigate();
  useEffect(() => {
    authQuery.mutate("", {
      onError: () => {
        navigate("/");
      },
    });
  }, []);
  if (authQuery.isLoading) return <h1>Cargando</h1>;

  return (
    <>
      <h1>LAYOUT</h1>
      {children ? <>{children}</> : <Outlet />}
    </>
  );
};
