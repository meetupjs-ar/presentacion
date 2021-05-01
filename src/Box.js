import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ image, text }) => (
  <div
    style={{
      alignItems: 'flex-start',
      display: 'flex',
      marginTop: '2rem'
    }}
  >
    {image && (
      <div style={{ marginRight: '1rem' }}>
        <img
          src={`./images/${image}.svg`}
          alt={text}
          style={{
            width: '50px'
          }}
        />
      </div>
    )}
    <span
      style={{
        lineHeight: '50px'
      }}
    >
      {text}
    </span>
  </div>
);

Box.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired
};

Box.defaultProps = {
  image: ''
};

export default Box;
