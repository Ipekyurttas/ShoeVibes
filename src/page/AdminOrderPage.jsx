import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserHeader from '../component/UserHeader';
import AdminSideBar from '../component/AdminSideBar';
import AdminOrder from '../component/AdminOrder';

const AdminOrderPage  = () => {
  return (
    <>
      <UserHeader/>
      <Container fluid className="mt-4">
        <Row>
          <Col lg={3}>
            <AdminSideBar />
          </Col>
          <Col lg={9}>
            <AdminOrder />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminOrderPage;
