import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  Description,
  Stats,
  StatsLi,
  Image,
  Name,
  Tag,
  Location,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <Description>
        <Image src={avatar} alt={`${username} avatar`} className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsLi>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsLi>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
