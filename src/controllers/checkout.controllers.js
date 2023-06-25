import express from 'express';
import Stripe from 'stripe';

const stripeModule = Stripe(process.env.STRIPE_API_KEY)
const router = express.Router();

router.post('/', async (req, res) => {
  const price = req.body.price*100;

    const session = await stripeModule.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Image',
            },
            unit_amount: price,
          },
          quantity: 1,

        },
      ],
      mode: 'payment',
      success_url: 'http://127.0.0.1:5173/',
      cancel_url: 'http://127.0.0.1:5173/',
    });

    return res.json(session.url)
  });

router.get('/', async (req, res) => {
  const orders = await prisma.order.findMany();
  res.json(orders);
});

  export default router;