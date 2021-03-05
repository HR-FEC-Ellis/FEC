import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AnswersList from './AnswersList.jsx';
import QAFeedback from './QAFeedback.jsx';

function QuestionsList({ questions }) {

  const [view, setView] = useState(false);
  const toggleView = (index) => {
    if (view === index) {
      return setView(null);
    }
    return setView(index);
  };

  // if (questions.length === 0) {
  //   return (
  //     <h1>Hi</h1>
  //   );
  // }
  return (
    <>
      <div className="showDefault-questions">
        {questions.map((question, index) => (
          <div
            className="view-question"
            key={question.question_id}
          >
            <div
              className="questionText"
              onClick={() => toggleView(index)}
              role="button"
              tabIndex={0}
              onKeyPress={() => toggleView(index)}
            >
              <strong>Q:  </strong>
              {question.question_body}
            </div>
            <div className="questionFeedback">
              <QAFeedback option={2} handleFeedback={() => {console.log('Should add  an answer')}} />
            </div>
            {view === index && <AnswersList />}
          </div>
        ))}
      </div>
    </>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
}

export default QuestionsList;