import PropTypes from 'prop-types';
import React from 'react';
import { FriendListItem } from './FriendsListItem';
import { FriendsList, Item, Image, Name, Status } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ name, id, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
