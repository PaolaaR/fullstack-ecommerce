import React, { useContext, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProductContext from '../context/Product/ProductContext';
import { UserContext } from '../context/User/UserContext';
import {useParams } from 'react-router-dom';

export const Product = () => {
  const params = useParams();
  const { productId } = params;

  const ctxProduct = useContext(ProductContext);
  const { mug, getMug, getPreferenceCheckoutMP } = ctxProduct;
  const { name, price, image } = mug[0];

  const ctxUser = useContext(UserContext);
  const { user } = ctxUser;

  useEffect(() => {
    const fetchMug = async () => {
      try {
        const res = await getMug(productId);

        if (res && res.mug) {
          const id = await getPreferenceCheckoutMP({
            items: [
              {
                title: res.name,
                quantity: 1,
                currency_id: 'CLP',
                unit_price: res.price,
                picture_url: res.image,
              },
            ],
            payer: {
              name: user.name,
              email: user.email,
            },
          });

          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://sdk.mercadopago.com/js/v2';
          script.addEventListener('load', () => {
            addCheckout(id);
          });
          document.body.appendChild(script);
        }
      } catch (error) {
        console.error('Error fetching mug:', error);
      }
    };

    fetchMug();
  }, [getMug, getPreferenceCheckoutMP, productId, user]);

  const addCheckout = (id) => {
    const mp = new window.MercadoPago('TEST-dfefa95d-6ba3-4765-9b5f-e54cbeafd61e', {
      locale: 'es-CL',
    });

    mp.checkout({
      preference: {
        id: id,
      },
      render: {
        container: `#payment-form`,
        label: 'Pagar',
      },
    });
  };

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Price: {price}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;