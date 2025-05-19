import React, { useState, useEffect } from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminProfilContent() {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/profile/edit');
    };

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token'); 
                const response = await axios.get('http://localhost:8080/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Kullanıcı bilgileri alınamadı:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div style={{ marginTop: '80px' }}>
            <Card className="border-0">
                <Card.Body>
                    <Card.Title as="h2">Account</Card.Title>

                    <Card className="mb-4 border-0 shadow-sm mt-4">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Card.Title as="h5" className="mb-0">Personal Information</Card.Title>
                                <Button variant="outline-secondary" size="sm" onClick={handleEdit}>Edit</Button>
                            </div>

                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
                                    <div>
                                        <div className="fw-bold">FirstName</div>
                                        <div className="text-muted">{user.firstName}</div>
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
                                    <div>
                                        <div className="fw-bold">LastName</div>
                                        <div className="text-muted">{user.lastName}</div>
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
                                    <div>
                                        <div className="fw-bold">Email Address</div>
                                        <div className="text-muted">{user.email}</div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AdminProfilContent