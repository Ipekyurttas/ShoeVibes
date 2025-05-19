import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../CSS/Notification.css'; 

const NotificationUser = () => {
  const notifications = [
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
  ];

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
