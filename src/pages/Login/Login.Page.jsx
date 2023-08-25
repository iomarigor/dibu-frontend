import React, { useState, useEffect } from "react";
import { useLoginQuery } from "../../hooks/useAuthQuery";
import { useSessionStore } from "../../store/Session.Store";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const isAuth = useSessionStore((state) => state.isAuth);
  const navigate = useNavigate();
  const loginQuery = useLoginQuery();

  useEffect(() => {
    console.log("login");
    if (isAuth) {
      navigate("/panel");
    }
  }, [isAuth]);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.currentTarget.elements[0].value;
    const password = e.currentTarget.elements[1].value;
    loginQuery.mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate("/panel");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="mail@unas.edu.pe"
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="*****"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button type="submit">Iniciar Sesión</button>
      <p>{loginQuery.isLoading ? "Loading" : ":)"}</p>
    </form>
  );
}

export default LoginPage;
