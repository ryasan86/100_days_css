import React from 'react';
import PropTypes from 'prop-types';

// codepen embedded project view
const Codepen = ({ user, hash, height, width, theme, tab, title }) => {
  const src     = `//codepen.io/${user}/embed/${hash}/?height=${height}&theme-id=${theme}&default-tab=${tab}`;
  const userUrl = `http://codepen.io/${user}`;
  const pen     = `${userUrl}/pen/${hash}/`;

  return (
    <iframe
      title={`100 Days CSS - ${title}`}
      width={width}
      height={height}
      scrolling="no"
      src={src}
      frameBorder="no"
      style={{ height: height, width: width, margin: '7rem 0' }}>
      <a href={pen}>See this pen</a> by {user} (<a href={user}>@{user}</a>) on{' '}
      <a href="http://codepen.io">CodePen</a>.
    </iframe>
  );
};

Codepen.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  tab: PropTypes.oneOf(['html', 'css', 'result', 'js']),
  theme: PropTypes.string,
};

Codepen.defaultProps = {
  height: '45rem',
  width: '40rem',
  tab: 'result',
  theme: 'light',
  user: 'ryasan86',
};

export default Codepen;
