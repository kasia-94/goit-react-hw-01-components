import PropTypes from 'prop-types';
import React from 'react';
import {
  Section,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
  GetRandomHexColor,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: GetRandomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage} %</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
