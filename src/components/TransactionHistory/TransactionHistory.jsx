import PropTypes from 'prop-types';
import React from 'react';
import {
  Table,
  HeadTable,
  HeadTableItem,
  BodyTable,
  BodyTableItem,
  BodyTableLine,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <HeadTable>
        <tr>
          <HeadTableItem>Type</HeadTableItem>
          <HeadTableItem>Amount</HeadTableItem>
          <HeadTableItem>Currency</HeadTableItem>
        </tr>
      </HeadTable>
      <BodyTable>
        {items.map(({ id, type, amount, currency }) => (
          <BodyTableLine key={id}>
            <BodyTableItem>{type}</BodyTableItem>
            <BodyTableItem>{amount}</BodyTableItem>
            <BodyTableItem>{currency}</BodyTableItem>
          </BodyTableLine>
        ))}
      </BodyTable>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
