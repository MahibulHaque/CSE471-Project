import React from "react";
import {
  Container,
  MainContainer,
  QuestionCounterHolder,
  QuestionDetailHolder,
  QuestionHolder,
  QuestionsContainer,
  QuestionsHeaderContainer,
  QuestionTagHolder,
  TextContainer,
} from "./CommunityScreenElements";

const CommunityScreen = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Looking for help?</h1>
        <p>
          Post your question on codedamn for free and let other people help you,
          or answer questions and earn karma.
        </p>
      </TextContainer>
      <MainContainer>
        <QuestionsHeaderContainer>
          <h3>All Questions</h3>
          <button>Ask a question</button>
        </QuestionsHeaderContainer>
        <QuestionsContainer>
          <QuestionHolder>
            <QuestionCounterHolder>
              <p>
                0<span>votes</span>
              </p>
              <p>
                0<span>answers</span>
              </p>
              <p>
                0<span>view</span>
              </p>
            </QuestionCounterHolder>
            <QuestionDetailHolder>
              <a href="#">
                How To take amount dynamically from firebase for razorpay
                integration in a react app
              </a>
              <QuestionTagHolder>
                <span>#react</span>
                <span>#javascript</span>
                <span>#nodejs</span>
                <p>asked 20 hours ago by Abdur Rahman</p>
              </QuestionTagHolder>
            </QuestionDetailHolder>
          </QuestionHolder>
          <QuestionHolder>
            <QuestionCounterHolder>
              <p>
                0<span>votes</span>
              </p>
              <p>
                0<span>answers</span>
              </p>
              <p>
                0<span>view</span>
              </p>
            </QuestionCounterHolder>
            <QuestionDetailHolder>
              <a href="#">
                How To take amount dynamically from firebase for razorpay
                integration in a react app
              </a>
              <QuestionTagHolder>
                <span>#react</span>
                <span>#javascript</span>
                <span>#nodejs</span>
                <p>asked 20 hours ago by Abdur Rahman</p>
              </QuestionTagHolder>
            </QuestionDetailHolder>
          </QuestionHolder>
        </QuestionsContainer>
      </MainContainer>
    </Container>
  );
};

export default CommunityScreen;
