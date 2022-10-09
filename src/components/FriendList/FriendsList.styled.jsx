import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 270px;
  height: 50px;
  padding: 5px;
  margin-bottom: 15px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

const getStatusColor = friends => {
  switch (friends.isOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'grey';
  }
};

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${getStatusColor};
`;

export const Image = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const Name = styled.p`
  margin: 0px;
  font-size: 20px;
`;
