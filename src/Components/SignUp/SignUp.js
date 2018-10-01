import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Name from './Name';
import Email from './Email';
import Password from './Password';


class SignUp extends Component {
  handeFormUpdate = (value) => {
    const { dispatch } = this.props;
    console.log(value);
    dispatch({ type: 'HANDLE_FORM_UPDATE', value });
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

        <Button onClick={this.saveDetails}>Sign Up</Button>
      </div>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(SignUp);
