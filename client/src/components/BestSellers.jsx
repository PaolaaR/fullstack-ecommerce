import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const BestSellers = () => {
  const [randomMugs, setRandomMugs] = useState([]);

  useEffect(() => {
    const fetchRandomMugs = async () => {
      try {
        const response = await axios.get('http://localhost:3005/get-mugs');
        const allMugs = response.data.mugs;

        
        const shuffledMugs = allMugs.sort(() => Math.random() - 0.5);

        
        const selectedMugs = shuffledMugs.slice(0, 4);

        setRandomMugs(selectedMugs);
      } catch (error) {
        console.error('Error fetching random mugs:', error);
      }
    };

    fetchRandomMugs();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Best Sellers</h1>
      {randomMugs.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {randomMugs.map((mug) => (
            <Card key={mug._id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={mug.image} />
              <Card.Body>
                <Card.Title>{mug.name}</Card.Title>
                <Card.Text>{mug.description}</Card.Text>
                <Card.Text>{`Price: $${mug.price}`}</Card.Text>
                <Button as={Link} to={`/Teacupdesign/catalog/${mug._id}`} variant="primary">
              Ver más
            </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BestSellers;
