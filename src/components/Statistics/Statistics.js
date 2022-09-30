import PropTypes from 'prop-types';

import { List, Item } from './Statistics.styled';
import { Section } from 'components/Section/Section';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title="Statistics">
      <List>
        <Item style={{ color: 'green' }}>
          Good: {good}
        </Item>
        <Item style={{ color: 'orange' }}>
          Neutral: {neutral}
        </Item>
        <Item style={{ color: 'red' }}>
          Bad: {bad}
        </Item>
        <Item>
          Total: {total}
        </Item>
        <Item>
          Positive feedback: {positivePercentage}%
        </Item>
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
