import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import '../CSS/Notification.css';

const NotificationAdmin = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Kargoya verildi: Siparişiniz yola çıktı!",
      createdAt: "2025-05-18T14:30:00"
    },
    {
      id: 2,
      message: "İndirim: Sepette %20 indirim fırsatını kaçırmayın!",
      createdAt: "2025-05-16T10:15:00"
    },
    {
      id: 3,
      message: "Hesabınız başarıyla güncellendi.",
      createdAt: "2025-05-10T09:45:00"
    }
  ]);

  const [newNotification, setNewNotification] = useState('');

  const handleSend = () => {
    if (!newNotification.trim()) return;

    const newNotif = {
      id: Date.now(),
      message: newNotification,
      createdAt: new Date().toISOString()
    };

    setNotifications([newNotif, ...notifications]);
    setNewNotification('');
  };

  return (
    <Container className="mt-4">
      <h4 className="mb-4">Send Notification to Users</h4>

      <Form className="mb-4">
        <div className="notification-input-group">
          <Form.Control
            type="text"
            placeholder="New notification"
            value={newNotification}
            onChange={(e) => setNewNotification(e.target.value)}
          />
          <Button
            variant="primary"
            onClick={handleSend}
            className="send-button"
          >
            Send
          </Button>
        </div>
      </Form>

      <h5 className="mb-3">Notification Sent</h5>
      {notifications.length === 0 ? (
        <p>There are no notifications sent yet.</p>
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

export default NotificationAdmin;
