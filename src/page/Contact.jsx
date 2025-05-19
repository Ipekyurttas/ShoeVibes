import React, { useState } from 'react';
import ProfileHomeNav from '../component/ProfileHomeNav.jsx';
import CategoryNav from '../component/CategoryNav.jsx';
import Footer from '../component/Footer.jsx';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import ProfileSideBar from '../component/ProfileSideBar.jsx';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Gönderilen:', formData);
        alert('Mesajınız başarıyla gönderildi!');
    };

    return (
        <div className="contact-page">
            <ProfileHomeNav />
            <CategoryNav />
            <br />
            <div className="col-12 col-md-2">
                <ProfileSideBar />
            </div>

            <Container className="" style={{ marginTop: "-300px" }}>
                <h2 className="text-center ">ShoeVibes ile İletişime Geçin</h2>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Adınız</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Adınızı girin"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>E-posta</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="E-posta adresinizi girin"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Mesajınız</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Mesajınızı buraya yazın"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="dark" type="submit" className="" style={{ backgroundColor: "#6a380a ", width: "100px", height: "40px", fontSize: "16px" }}>
                                Gönder
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <br /><br />
            <Footer />
        </div>
    );
};

export default Contact;
