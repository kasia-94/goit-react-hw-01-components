import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  background-color: white;
`;

export const HeadTable = styled.thead`
  height: 50px;
  background-color: #0071ce;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
`;

export const HeadTableItem = styled.th`
  width: 33.3%;
`;

export const BodyTable = styled.tbody`
  font-size: 15px;
  text-align: center;
`;

export const BodyTableItem = styled.td`
  height: 30px;
`;

export const BodyTableLine = styled.tr`
  background-color: white;
  :nth-last-of-type(odd) {
    background-color: lightgray;
  }
`;
