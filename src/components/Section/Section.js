import PropTypes from 'prop-types';

import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTitle>
      <h2 style={{ fontSize: '34px' }}>{title}</h2>
      {children}
    </SectionTitle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
