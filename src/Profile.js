import React from 'react';
import PropTypes from 'prop-types';
import P from './Paragraph';

const getFilter = (isNew, isNotPresent) => {
  if (isNew) {
    return 'initial';
  }

  if (isNotPresent) {
    return 'blur(5px)';
  }

  return 'grayscale(100)';
};

const Profile = ({ isNew, isNotPresent, name, twitter }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2vh',
        width: '20vw'
      }}
    >
      <img
        src={`http://avatars.io/twitter/${twitter}`}
        alt={name}
        style={{
          filter: getFilter(isNew, isNotPresent),
          margin: '0 auto',
          maxWidth: '18vw',
          width: '100%'
        }}
      />
      <P>{name}</P>
    </div>
  );
};

Profile.propTypes = {
  isNew: PropTypes.bool,
  isNotPresent: PropTypes.bool,
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired
};

Profile.defaultProps = {
  isNew: false,
  isNotPresent: false
};

export default Profile;
