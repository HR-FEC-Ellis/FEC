import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({toggleModalWindow}) => (
  <button className="actionBtn" type="button" onClick={toggleModalWindow}>☆</button>
);

ActionButton.propTypes = {
  toggleModalWindow: PropTypes.func.isRequired
}

export default ActionButton;
