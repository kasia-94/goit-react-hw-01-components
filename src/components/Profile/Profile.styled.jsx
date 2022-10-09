import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  background-color: white;
  border-radius: 3%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatsLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid #aaaaaa;
  background-color: #eeeeeeb9;
  border-radius: 1px;
  padding: 15px;
  width: 33.3%;
`;

export const Image = styled.img`
  width: 100px;
  background-color: grey;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 5px;
`;

export const Tag = styled.p`
  font-size: 14px;
  margin: 5px;
  color: grey;
`;

export const Location = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 5px;
  color: grey;
`;

export const Label = styled.span`
  color: grey;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  color: black;
  font-size: 15px;
  font-weight: 700;
`;
