import { useEffect, useState } from "react";
import { Statistics } from "./FeedbackSection/Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackSection/FeedbackOptions/FeedbackOptions";
import { Section } from "./FeedbackSection/common/Section";
import { Notification } from "./FeedbackSection/common/Notification";
import { FeedbackWrapper } from "./FeedbackSection/FeedbackWrapper.styled";

export const App = () => {

 const feedbackName = {
      good: "good",
      neutral: "neutral",
      bad: "bad",
  };
    
    

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = e => {
    const { feedbackOption } = e.target.dataset;
    const { good, neutral, bad } = feedbackName;

    switch (feedbackOption) {

      case good:
        setGood(s => s + 1)
        break;
      
      case neutral:
        setNeutral(s => s + 1)
        break;
      
      case bad:
        setBad(s => s + 1)
        break;
      
      default:
        return
    };
  };


  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [bad, good, neutral]);



  const [PositiveFeedbackPercentage, setPositiveFeedbackPercentage] = useState('')
  useEffect(() => {
    if (total === 0) {
      return
    }

    setPositiveFeedbackPercentage(Math.floor((good / total) * 100) + "%")
  }, [good, total]);
  
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <FeedbackWrapper>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={feedbackName}
              onLeaveFeedback={addFeedback}>
            </FeedbackOptions>
          </Section>
                
          <Section title="Statistics">
            {total === 0
              ?
              <Notification message="There is no feedback" />
              :
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={PositiveFeedbackPercentage}>
              </Statistics>
            }
          </Section>
        </FeedbackWrapper>
      </div>
    );
};
