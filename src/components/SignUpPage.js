import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUp = () => {
  return (
    <div id="splash">
      <div className="splash-header">
        <h1>Create Your Profile</h1>
        <TextField
          hintText="First Name"/>
        <TextField
          hintText="Last Name"/>
        <RaisedButton
          label="Submit"
          />
      </div>
    </div>
  );
};

export default SignUp;
