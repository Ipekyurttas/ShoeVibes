import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import '../CSS/Notification.css';
import axios from 'axios';

const NotificationUser = () => {
  const [notifications, setNotifications] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/notifications/my", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setNotifications(response.data);
      } catch (error) {
        console.error("Bildirimler alınamadı:", error);
      }
    };

    if (token) {
      fetchNotifications();
    }
  }, [token]);

  return (
    <Container className="mt-4">
      <h4 className="mb-4">Notifications</h4>

      {notifications.length === 0 ? (
        <p>You don’t have any notifications yet.</p>
      ) : (
        notifications.map((notif) => (
          <Card key={notif.id} className="mb-3 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start">
                <div className="text-dark">{notif.message}</div>
                <small className="text-muted">
                  {new Date(notif.createdAt).toLocaleString()}
                </small>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default NotificationUser;
