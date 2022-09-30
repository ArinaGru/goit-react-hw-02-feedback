import PropTypes from 'prop-types';

import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(btnName => (
        <li key={btnName}>
          <Button
            type="button"
            name={btnName}
            style={{ backgroundColor: getRandomColor(btnName) }}
            onClick={onLeaveFeedback}
          >
            {btnName}
          </Button>
        </li>
      ))}
    </ButtonWrapper>
  );
};

function getRandomColor(btnName) {
  if (btnName === 'good') {
    return '#88cf3c';
  } else if (btnName === 'neutral') {
    return '#fed8b1';
  }
  return '#fa5148';
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
