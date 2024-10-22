import React from "react";
import { Modal, Button } from "react-bootstrap";

function AnnouncementModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" static>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AnnouncementModal;
