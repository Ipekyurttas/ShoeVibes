import React from 'react';
import { Nav, Card, ListGroup, Button } from 'react-bootstrap';
import { PersonFill, Heart, Cart, ListCheck, Gear, BoxArrowRight, } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../CSS/ProfileSideBar.css';

function ProfileSideBar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path === 'logout') {
      toast.info('Logging out...', { autoClose: 1000 });
      setTimeout(() => navigate('/'), 1200);
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <div className="container-fluid mt-4 bg-white">
      <div className="row">
        <div className="col-md-3">
          <Nav className="flex-column profile-sidebar bg-white">
            <Nav.Item>
              <Nav.Link onClick={() => handleNavigation('profile/account')} className="d-flex align-items-center active">
                <PersonFill className="me-2" /> Account
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleNavigation('profile/favorites')} className="d-flex align-items-center">
                <Heart className="me-2" /> Favorites
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleNavigation('profile/cart')} className="d-flex align-items-center">
                <Cart className="me-2" />
                Cart
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleNavigation('profile/orders')} className="d-flex align-items-center">
                <ListCheck className="me-2" /> Orders
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleNavigation('profile/settings')} className="d-flex align-items-center">
                <Gear className="me-2" /> Settings
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleNavigation('logout')} className="d-flex align-items-center">
                <BoxArrowRight className="me-2" /> Log out
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className="col-md-9">
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
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar;
