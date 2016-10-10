import React from 'react';
import { Link } from 'react-router';

const GlobalNav = () => {
  return (
    <div id="nav">
			<div className="left">
	      <Link to="/about">About</Link>
				<Link to="/">Home</Link>
			</div>
			<div className="right">
      	<Link to="/login">Log In</Link>
			</div>
    </div>
  );
};

export default GlobalNav;
