import React from 'react';
import PropTypes from 'prop-types';
import P from './Paragraph';

const getFilter = isNotPresent => {
  if (isNotPresent) {
    return 'blur(5px)';
  }

  return 'initial';
};

const Profile = ({ isNotPresent, name, twitter }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem',
        width: '25%'
      }}
    >
      <img
        src={`http://avatars.io/twitter/${twitter}`}
        alt={name}
        style={{
          filter: getFilter(isNotPresent),
          margin: '0 auto',
          width: '100%'
        }}
      />
      <P>{name}</P>
    </div>
  );
};

Profile.propTypes = {
  isNotPresent: PropTypes.bool,
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired
};

Profile.defaultProps = {
  isNotPresent: false
};

export default Profile;
