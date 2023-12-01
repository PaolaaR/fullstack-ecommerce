import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/Product/ProductContext';
import { UserContext } from '../context/User/UserContext';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

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
        if (res && Array.isArray(res)) {
          const id = await getPreferenceCheckoutMP({
            items: [
              {
                title: res[0].name,
                quantity: 1,
                currency_id: 'CLP',
                unit_price: res[0].price,
                picture_url: res[0].image,
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
        console.error('Error fetching data:', error);
      }
    };

    fetchMug();
  }, [productId, getMug, getPreferenceCheckoutMP, user]);

  const addCheckout = (id) => {
    const mp = new window.MercadoPago('TEST-6f33d03a-a55f-47c9-b364-2db6ea372705', {
      locale: 'es-CL',
    });

    mp.checkout({
      preference: {
        id: id,
      },
      render: {
        container: `#payment-form`,
        label: 'Pay',
      },
    });
  };

  return (
    <Container>
      {mug.length === 0 ? null : (
        <>
          <Row>
            <Col xs={12} md={6}>
              <Image src={image} alt="Product" fluid />
            </Col>
            <Col xs={12} md={6}>
            <div className="product-info" style={{ backgroundColor: '#f3b058', padding: '40px', borderRadius: '10px', maxWidth: '400px' }}>
              <h1>{name}</h1>
              <p>
                <b>Price</b>: ${price || 0} CLP
              </p>
              {user?.email ? (
                <div id="payment-form"></div>
              ) : (
                <Link to="/Teacupdesign/register">
                  <Button variant="danger">If you want to buy, you must create an account</Button>
                </Link>
              )}
            </div>
          </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <div>
                <h3>Description</h3>
                <div>
                  <p>
                  In a consectetur urna. Donec et ipsum turpis. Morbi in lectus vel turpis faucibus feugiat vel ac
                    urna. Suspendisse imperdiet congue dolor, non mattis est porttitor in. Etiam commodo quam vitae congue
                    eleifend. In a felis id velit imperdiet varius a at turpis. Nullam porta, ligula quis aliquet iaculis,
                    lectus magna faucibus odio, eget venenatis risus lectus vitae sem.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <h3>Highlights</h3>
                <ul>
                  <li>
                    <span>Feature I</span>
                  </li>
                  <li>
                    <span>Feature II</span>
                  </li>
                  <li>
                    <span>Feature III</span>
                  </li>
                  <li>
                    <span>Feature IV</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

