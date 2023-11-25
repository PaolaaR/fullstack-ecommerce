import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Catalog = () => {
  const [mugs, setMugs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3005/get-mugs');
        console.log('response:', response);

        if (Array.isArray(response.data.mugs)) {
          setMugs(response.data.mugs);
        } 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {mugs.map((mug) => (
        <Card key={mug._id} style={{ width: '18rem', margin: '10px', backgroundColor: "#f3b058" }}>
          <Card.Img variant="top" src={mug.image} />
          <Card.Body>
            <Card.Title>{mug.name}</Card.Title>
            <Card.Text>{mug.description}</Card.Text>
            <Card.Text>Price: ${mug.price}</Card.Text>
            <Button as={Link} to={`/Teacupdesign/${mug._id}`} variant="primary">
              Ver más
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
