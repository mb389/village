import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import GlobalNav from './Globals/GlobalNav';

const App = (props) => {
  return (
    <div>
      <GlobalNav />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
