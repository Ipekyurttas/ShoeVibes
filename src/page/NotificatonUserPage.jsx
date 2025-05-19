import React from 'react';
import ProfileHomenNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import ReviewDetail from '../component/ReviewDetail';
import ProfileSideBar from '../component/ProfileSideBar';
import { Container, Row, Col } from 'react-bootstrap';
import NotificationUser from '../component/NotificationUser';

const ReviewPage = () => {
  return (
    <>
      <ProfileHomenNav />
      <CategoryNav />
      <Container fluid className="mt-4">
        <Row>
          <Col lg={3}>
            <ProfileSideBar />
          </Col>
          <Col lg={9}>
            <NotificationUser />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ReviewPage;
