import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/user';

// import Step1 from './ProfileCreation/Step1';

class SignUp extends React.Component {

  state = {
    email: '',
    password: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.actions.userReg(this.state);

  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div id="splash">
        <form onSubmit={this.onSubmit}>
          <div className="splash-header">
            <h1>Create Your Profile</h1>
            <TextField
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              hintText="E-mail"/>
            <TextField
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              hintText="Password"/>
            <TextField
              hintText="Re-enter Password"/>
            <Link to="Step1">
            <RaisedButton
              label="Submit"
              onClick={this.onSubmit}
              />
            </Link>
          </div>
        </form>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    user: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
