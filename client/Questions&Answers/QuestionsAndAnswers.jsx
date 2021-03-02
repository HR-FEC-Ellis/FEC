import React from 'react';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 18076,
    };
  }

  render() {
    const {product} = this.state;

    return (
      <div className="qaContainer" style={{ border: 'solid black thin' }}>
        Container
        <div className="qaHeader" style={{ border: 'solid black thin' }}>
          Header
        </div>
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          Search
        </div>
        <div className="qaList" style={{ border: 'solid black thin' }}>
          List
        </div>
      </div>
    );
  }
};

export default QuestionsAndAnswers;