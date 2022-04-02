const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params
      const { purchaseType, planType } = req.body;
      const prices = await stripe.prices.list({
        active: true,
        expand: ["data.product"],
        limit: 10,
      });
      let priceID;
      if (planType === "12month") {
        priceID = prices.data[0].id;
      } else if (planType === "6month") {
        priceID = prices.data[1].id;
      } else {
        priceID = prices.data[2].id;
      }
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: `${priceID}`,
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      // console.log(session);
      res.json({ url: session.url });
      
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
