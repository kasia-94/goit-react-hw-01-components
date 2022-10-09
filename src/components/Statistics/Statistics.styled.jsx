import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-top: 10px;
  background-color: white;
`;
export const Title = styled.h2`
  font-size: 30px;
  color: #4d4d4d;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 60px;
  margin: 0;
  list-style: none;
  color: white;
`;

export const Label = styled.span`
  font-size: 15px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;

export const GetRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
