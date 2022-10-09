import PropTypes from 'prop-types';
import React from 'react';
import { FriendsList, Item, Image, Name, Status } from './FriendsList.styled';

export const FriendListItem = ({ id, isOnline, name, avatar }) => {
  return (
    <FriendsList>
      <Item key={id}>
        <Status isOnline={isOnline}></Status>
        <Image src={avatar} alt={`${name} avatar`} />
        <Name>{name}</Name>
      </Item>
    </FriendsList>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
