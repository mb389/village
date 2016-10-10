import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LogIn = () => {
  return (
    <div id="splash">
      <div className="splash-header">
        <h2>Log In To Village</h2>
        <TextField
          floatingLabelText="Login"/>
        <TextField
          floatingLabelText="Password"
          />
        <RaisedButton
          label="Submit"
          />
            <p>Not registered? Click <Link to="signup">here</Link> to sign up!</p>
      </div>
    </div>
  );
};

export default LogIn;
