import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

function ProfileDetailContent() {
  return (
    <Card className="border-0 bg-white">
      <Card.Body>
        <Card.Title as="h2">Profile</Card.Title>

        <Card className="mb-4 border-0 shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Card.Title as="h5" className="mb-0">Personal Information</Card.Title>
              <Button variant="outline-secondary" size="sm">Edit</Button>
            </div>

            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
                <div>
                  <div className="fw-bold">Name</div>
                  <div className="text-muted">Zeynep İnce</div>
                </div>
              </ListGroup.Item>

              <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
                <div>
                  <div className="fw-bold">Username</div>
                  <div className="text-muted">zeynep123</div>
                </div>
              </ListGroup.Item>

              <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
                <div>
                  <div className="fw-bold">Email Address</div>
                  <div className="text-muted">zynp@gmail.com</div>
                </div>
              </ListGroup.Item>

              <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
                <div className="fw-bold">Shipping Addresses</div>
                <Button variant="outline-secondary" size="sm">Add</Button>
              </ListGroup.Item>

              <ListGroup.Item className="text-muted border-0 ps-0">No addresses saved</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default ProfileDetailContent;
