import React from 'react';

const Logo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{ height: '480px' }}
  />
);

Logo.defaultProps = {
  src: "",
  alt: ""
}

export default Logo;
