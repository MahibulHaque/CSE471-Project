import { useState, createContext, useContext } from "react";

const QuestionContext = createContext();

export const useQuestionContext = () => useContext(QuestionContext);

function QuestionDetailContextProvider(props) {
  const [questionDetail, setQuestionDetail] = useState();
  function questionDetailUpdater(questionInfo) {
    setQuestionDetail(questionInfo);
  }

  const value = { questionDetail, setQuestionDetail, questionDetailUpdater };
  return (
    <QuestionContext.Provider value={value}>{props.children}</QuestionContext.Provider>
  );
}
export default QuestionDetailContextProvider;