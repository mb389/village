import React from 'react';
import { Link } from 'react-router';

const Step1 = () => {
  return (
    <div id="splash">
      <div className="splash-header">
        <h1>Create Your Profile</h1>
        <TextField
          hintText="E-mail"/>
        <TextField
          hintText="Password"/>
        <TextField
          hintText="Re-enter Password"/>
        <Link to="Step1">
        <RaisedButton
          label="Submit"
          />
        </Link>
      </div>
    </div>
  );
};

export default Step1;
