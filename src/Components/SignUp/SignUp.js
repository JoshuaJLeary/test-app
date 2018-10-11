import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Name from './Name';
import Email from './Email';
import Password from './Password';


class SignUp extends Component {
  handeFormUpdate = (value) => {
    const { dispatch } = this.props;
    console.log(value);
    dispatch({ type: 'HANDLE_FORM_UPDATE', value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;

    // Validation

    history.push('/welcome');
  }

  render() {
    return (
      <div className="signUp">
        <h2>Let's</h2>
        <h1><b>Sign Up</b></h1>
        <p>Use the form below to sign up for this super awesome service.
          You're only a few steps away!
        </p>
        <form onSubmit={this.handleSubmit}>
          <Name onChange={this.handeFormUpdate} />
          <Email onChange={this.handeFormUpdate} />
          <Password onChange={this.handeFormUpdate} />

          <Button
            className="signUpBtn"
            onClick={this.handleSubmit}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect()(SignUp));
