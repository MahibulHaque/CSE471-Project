import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Container,
  Header,
  NameHolder,
  RedirectionButton,
} from "./ThankYouScreenElements";
import { useRouter } from "next/router";

const ThankYouScreen = ({ customerName }) => {
  const router = useRouter();
  var duration = 10 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
    if (animationEnd - Date.now() <= 0) {
      return clearInterval(interval);
    }
  }, []);
  return (
    <Container>
      <Header>Thank you for your purchase.</Header>
      <NameHolder>
        Your payment is successful. A copy of your receipt has been sent to your
        email.
      </NameHolder>
      <RedirectionButton onClick={()=>{router.replace("/")}}>Return Home</RedirectionButton>
    </Container>
  );
};

export default ThankYouScreen;
