import { Radio, RadioGroup, styled } from "@mui/material";
import Image from "next/image";
import { VscCreditCard } from "react-icons/vsc";
import {
  ButtonContainer,
  Container,
  DetailContainer,
  EmailContainer,
  HeaderDetail,
  NameContainer,
  PaymentContainer,
  PaymentProcessContainer,
  PriceContainer,
  PriceInfo,
  PriceInfoContainer,
  RadioButtons,
  TextBox,
  Wrapper,
  WrapperPrice,
} from "./CheckoutScreenElements";

const CheckoutScreen = () => {
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px rgb(16 22 26 / 40%)"
        : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
        : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background:
        theme.palette.mode === "dark"
          ? "rgba(57,75,89,.5)"
          : "rgba(206,217,224,.5)",
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  });

  // Inspired by blueprintjs
  function BpRadio(props) {
    return (
      <Radio
        sx={{
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }
  return (
    <Container>
      <Wrapper>
        <DetailContainer>
          <HeaderDetail>Open Robotics</HeaderDetail>
          <TextBox>
            <NameContainer>Mahibul Haque</NameContainer>
            <EmailContainer>mahibhaque810@gmail.com</EmailContainer>
          </TextBox>
          <h3
            style={{
              color: "#262626",
              fontWeight: "400",
              marginBottom: "-.5em",
            }}
          >
            Payment
          </h3>
          <p
            style={{
              color: "#757575",
              fontSize: "14px",
              marginBottom: "1.5rem",
            }}
          >
            All transactions are secure and encrypted.
          </p>
          <PaymentContainer>
            <RadioGroup
              defaultValue="creditCard"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
            >
              <RadioButtons
                value="creditCard"
                control={<BpRadio />}
                label="Credit/Debit card (Processed via Stripe)"
              />
              <PaymentProcessContainer>
                <VscCreditCard />
                <p>
                  After clicking “Complete Order”, you will be redirected to
                  Stripe (Cards and Wallets) to complete your purchase securely.
                </p>
              </PaymentProcessContainer>
              <RadioButtons
                value="disabled"
                disabled
                control={<BpRadio />}
                label="Netbanking/UPI (Not available for this purchase)"
              />
              <RadioButtons
                value="disabled"
                disabled
                control={<BpRadio />}
                label="PayPal (Not available for this purchase)"
                style={{ borderTop: "1px solid #d4d4d4" }}
              />
            </RadioGroup>
          </PaymentContainer>

          <ButtonContainer>
            <button className="paymentButton">Complete Order</button>
            <button className="redirectButton">Return to site</button>
          </ButtonContainer>
        </DetailContainer>
      </Wrapper>

      <WrapperPrice>
        <PriceInfoContainer>
          <PriceInfo>
            <Image
              width={69.28056}
              height={60}
              src="/images/logo-red.png"
              alt="Open Robotics logo"
            />
            <h3>
              Pro membership (6 months)
              <span>Full access to codedamn platform</span>
            </h3>
            <p>৳4800 every 6 months</p>
          </PriceInfo>
          <PriceContainer>
            <span>Subtotal:</span>
            <h4>৳4800.00</h4>
          </PriceContainer>
          <PriceContainer style={{ borderBottom: "1px solid #d4d4d4" }}>
            <span>Taxes:</span>
            <h4>৳0.00</h4>
          </PriceContainer>
          <PriceContainer>
            <span>Total:</span>
            <h2>
              <span>BDT</span> ৳4800.00
            </h2>
          </PriceContainer>
        </PriceInfoContainer>
      </WrapperPrice>
    </Container>
  );
};

export default CheckoutScreen;
