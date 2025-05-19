import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserHeader from '../component/UserHeader';
import AdminSideBar from '../component/AdminSideBar';
import NotificationAdmin from '../component/NotificationAdmin';

const NotificationAdminPage  = () => {
  return (
    <>
      <UserHeader/>
      <Container fluid className="mt-4">
        <Row>
          <Col lg={3}>
            <AdminSideBar />
          </Col>
          <Col lg={9}>
            <NotificationAdmin />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotificationAdminPage;
