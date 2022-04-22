import Link from "next/link";
import React from "react";
import { useQuestionContext } from "../../Contexts/QuestionDetailContext";
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

function timeAgo(input) {
  const date = input instanceof Date ? input : new Date(input);
  const formatter = new Intl.RelativeTimeFormat("en");
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  for (let key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      return formatter.format(Math.round(delta), key);
    }
  }
}

const CommunityScreen = () => {
  const { questionDetail } = useQuestionContext();
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
          <Link href="/community/question/ask" passHref>
            <button>Ask a question</button>
          </Link>
        </QuestionsHeaderContainer>
        {questionDetail && (
          <QuestionsContainer>
            {questionDetail.map((question, index) => (
              <QuestionHolder key={index}>
                <QuestionCounterHolder>
                  <p>
                    {question.questionVoteCount}
                    <span>votes</span>
                  </p>
                  <p>
                    {question.questionAnswerCount}
                    <span>answers</span>
                  </p>
                  <p>
                    {question.questionViewCount}
                    <span>view</span>
                  </p>
                </QuestionCounterHolder>
                <QuestionDetailHolder>
                  <a href={`/community/question/${question.questionId}`}>
                    {question.questionTitle}
                  </a>
                  <QuestionTagHolder>
                    {question.questionTags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                    <p>
                      asked {timeAgo(question.questionPostTime)} by{" "}
                      {question.questionBy}
                    </p>
                  </QuestionTagHolder>
                </QuestionDetailHolder>
              </QuestionHolder>
            ))}
          </QuestionsContainer>
        )}
      </MainContainer>
    </Container>
  );
};

export default CommunityScreen;
