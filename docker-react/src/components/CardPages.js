import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/CardPage.css';
import { useNavigate } from "react-router-dom";

function CardPage({ products }) {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      {products.map((eachCard) => (
        <Card key={eachCard.id} className="card-item">
          <Card.Img
            variant="top"
            src={eachCard.image_full_url || "https://via.placeholder.com/150"} 
            alt={eachCard.name || "Product Image"}
            className="card-image"
          />
          <Card.Body>
            <Card.Title>{eachCard.name || "No Name"}</Card.Title>
            <Card.Text>
              Category: {eachCard.category || "No Category"} <br />
              Price: ₱{parseFloat(eachCard.price || 0).toFixed(2)} <br />
              Stock: {eachCard.stock || 0}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/products/${eachCard.id}`)}
            >
              Info
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardPage;
