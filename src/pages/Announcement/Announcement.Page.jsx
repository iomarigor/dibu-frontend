import React, { useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import AnnouncementModal from "./modals/Announcement.Modal";
function AnnouncementPage() {
  const [announcementModal, setAnnouncementModal] = useState(false);
  const changeAnnouncementModal = () => {
    setAnnouncementModal(!announcementModal);
  };
  return (
    <div>
      <Button variant="primary" onClick={changeAnnouncementModal}>
        Launch demo modal
      </Button>
      <Card>
        <Card.Header>Gestión Convocatoria</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <AnnouncementModal
        show={announcementModal}
        handleClose={changeAnnouncementModal}
      />
    </div>
  );
}

export default AnnouncementPage;
