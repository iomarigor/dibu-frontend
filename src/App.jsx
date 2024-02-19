import React, { useState } from "react";
import "./App.css";
import routes from "./pages/routes";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./libs/protectedRoutes";
import { useSessionStore } from "./store/Session.store";
import queryClient from "./libs/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PublicRoute } from "./libs/publicRoutes";

function App() {
  const isAuth = useSessionStore((state) => state.isAuth);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/panel" render={(props) => <AdminLayout {...props} />} /> */}
          {/* Rutas públicas */}
          <Route path="" element={<PublicRoute isAllowed={isAuth} />}>
            {routes
              .filter((r) => !r.private_access)
              .map((r, key) => (
                <Route key={key} path={r.path} element={<r.component />} />
              ))}
          </Route>
          {/* Rutas privadas */}
          <Route path="panel" element={<ProtectedRoute isAllowed={isAuth} />}>
            {routes
              .filter((r) => r.private_access)
              .map((r, key) => (
                <Route
                  key={key}
                  path={r.layout + r.path}
                  element={<r.component />}
                />
              ))}
            <Route
              path="/panel/*"
              element={
                <Navigate
                  to="/error-404"
                  replace
                  state={{ customParam: "someValue" }}
                />
              }
            />
          </Route>
          {/* Ruta de error 404 */}
          <Route path="*" element={<Navigate to="/error-404" replace />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
