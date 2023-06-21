import express from 'express';
import auth from '../middlewares/auth.js';

const stripe = require('stripe')(process.env.STRIP_API_KEY)
const router = express.Router();

const session = await stripe.checkout.sessions.create({
    success_url: "http://127.0.0.1:5173/checkout/success",
    // success_url: "http://127.0.0.1:5173/order/success?session_id={CHECKOUT_SESSION_ID}",
  });

router.post('/checkout', async (req, auth, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Image',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:8080/success',
      cancel_url: 'http://localhost:8080/cancel',
    });
  
    res.redirect(303, session.url);
  });

  export default router;