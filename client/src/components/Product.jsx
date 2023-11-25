import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/Product/ProductContext';
import { UserContext } from '../context/User/UserContext';
import { Link, useParams } from 'react-router-dom';

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
        console.log("product id: " + productId)
        const res = await getMug(productId);
        console.log (productId)
        console.log('res:', res);
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
    const mp = new window.MercadoPago('TEST-dfefa95d-6ba3-4765-9b5f-e54cbeafd61e', {
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
    <div>
      {mug.length === 0 ? null : (
        <>
          <div>
            <div>
              <div>
                <img src={image} alt="Product" />
              </div>
            </div>
            <div>
              <h1>{name}</h1>
            </div>
            <div>
              <h2>Characteristics</h2>
              <p>
                <b>Price</b>: ${price || 0} CLP
              </p>
              {user?.email ? (
                <div id="payment-form"></div>
              ) : (
                <Link to="/register">
                  <button type="button">If you want to buy, you must create an account</button>
                </Link>
              )}
            </div>
            <div>
              <div>
                <h3>Description</h3>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus malesuada odio, a euismod odio
                    sagittis id. Phasellus volutpat dui rutrum ligula dapibus tempor. Curabitur in justo in neque aliquet
                    sagittis quis nec augue. In mattis, lectus non imperdiet imperdiet, est lectus posuere felis, nec
                    fermentum eros dolor ut dolor. Fusce finibus velit vitae cursus vehicula. Donec accumsan tincidunt est
                    pulvinar suscipit. Mauris bibendum id magna at iaculis. Mauris interdum dolor quis tortor porta, et
                    consectetur nisl viverra. Vivamus in congue mi, in feugiat enim. Etiam convallis mauris dui, quis
                    luctus purus consectetur id. Maecenas pharetra vitae tellus fringilla congue. Quisque aliquam eget sem
                    vel aliquam.
                  </p>
                </div>
              </div>
              <div>
                <h3>Highlights</h3>
                <div>
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
              </div>
              <div>
                <h2>Details</h2>
                <div>
                  <p>
                    In a consectetur urna. Donec et ipsum turpis. Morbi in lectus vel turpis faucibus feugiat vel ac
                    urna. Suspendisse imperdiet congue dolor, non mattis est porttitor in. Etiam commodo quam vitae congue
                    eleifend. In a felis id velit imperdiet varius a at turpis. Nullam porta, ligula quis aliquet iaculis,
                    lectus magna faucibus odio, eget venenatis risus lectus vitae sem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
