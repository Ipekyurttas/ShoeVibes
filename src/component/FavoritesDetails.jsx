import React from 'react';
import { Card } from 'react-bootstrap';

function FavoritesDetails() {
  return (
    <Card className="border-0 bg-white">
      <Card.Body>
        <Card.Title as="h2">Favori Ürünlerim</Card.Title>

        <Card className="mt-4 border-0 shadow-sm">
          <Card.Body className="text-center text-muted py-5">
            <div style={{ fontSize: '2rem' }}>💔</div>
            <div className="mt-3">Henüz favori ürün eklemediniz.</div>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default FavoritesDetails;
