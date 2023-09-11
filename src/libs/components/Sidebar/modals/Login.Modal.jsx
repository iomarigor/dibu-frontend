import React, { useState } from "react";
import { useLoginQuery } from "../../../../hooks/useAuthQuery";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
function LoginModal({ show, handleClose }) {
  const navigate = useNavigate();
  const loginQuery = useLoginQuery();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginQuery.mutate(credentials, {
      onSuccess: () => {
        navigate("/panel");
      },
    });
  };
  return (
    <Modal show={show} onHide={handleClose} size="sm">
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Inicio de Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputEmail">Correo</Form.Label>
          <Form.Control
            type="email"
            id="inputEmail"
            placeholder="mail@unas.edu.pe"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <Form.Label htmlFor="inputPassword">Contraseña</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            placeholder="*****"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            disabled={loginQuery.isLoading}
          >
            {loginQuery.isLoading ? "Loading" : "Ingresar"}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default LoginModal;
