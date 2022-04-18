const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import Member from "../../models/Member";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { session_id } = req.body;
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      const user = await Member.findOne({
        email: session.customer_details.email,
      });

      if (!user) {
        // new pro member
        const subscriptionId = session.subscription;
        const subscription = await stripe.subscriptions.retrieve(
          subscriptionId
        );

        const proMember = new Member({
          name: session.customer_details.name,
          email: session.customer_details.email,
          paymentStatus: subscription.plan.active,
          periodStart: new Date(subscription.current_period_start * 1000),
          periodEnd: new Date(subscription.current_period_end * 1000),
          customerID: subscription.customer,
          productID: subscription.plan.product,
          interval:
            subscription.plan.interval_count + subscription.plan.interval,
        });
        proMember
          .save()
          .then((result) => {
            return res.status(201).json({ subscription: result });
          })
          .catch((error) => {
            res.statusCode(400);
            res.send({ error: error });
            throw error;
          });
      } else {
        // existing pro member;
        return res
          .status(201)
          .json({ message: "User already has pro membership" });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
