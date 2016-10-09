import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const GlobalNav = (props) => {
  return (
    <div id="nav">
      <Link to="/about">About</Link>
      <IndexLink to="/">Log In</IndexLink>
    </div>
  );
};

export default GlobalNav;
