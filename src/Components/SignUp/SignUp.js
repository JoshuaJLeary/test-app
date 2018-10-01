import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Name from './Name';
import Email from './Email';
import Password from './Password';


class SignUp extends Component {
  handeFormUpdate = (value) => {
    const { dispatch } = this.props;
    console.log(value);
    dispatch({ type: 'HANDLE_FORM_UPDATE', value });
  }

  handleFormDetails = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'SET_DETAILS' });
  }

  render() {
    return (
      <div className="signUp">
        <h2>Let's</h2>
        <h1>Sign Up</h1>
        <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
        <form>
          <Name onChange={this.handeFormUpdate} />
          <Email onChange={this.handeFormUpdate} />
          <Password onChange={this.handeFormUpdate} />
        </form>
        <Link to="/welcome">
          <Button
            className="signUpBtn"
            onClick={this.handleFormDetails}
          >Sign Up
          </Button>
        </Link>
      </div>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(SignUp);
