import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
// import Name from './Name';
// import Email from './Email';
// import Password from './Password';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleChangeFor = propertyName => (e) => {
    this.setState({
      [propertyName]: e.target.value,
    });
  }

  saveDetails = () => {
    console.log('button clicked');
    const { dispatch } = this.props;
    const { history } = this.props;
    const { name } = this.state;
    const { email } = this.state;
    const { password } = this.state;
    console.log('any info?', this.state);
    dispatch({
      type: 'SET_DETAILS',
      payload: name,
      email,
      password,
    });
    history.push('/welcome');
  }

  render() {
    const { name } = this.state;
    const { email } = this.state;
    const { password } = this.state;
    return (
      <React.Fragment>
        <h2>Let's</h2>
        <h1>Sign Up</h1>
        <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={this.handleChangeFor('name')}
            /><br />
            <FormControl
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={this.handleChangeFor('email')}
            /><br />
            <FormControl
              type="text"
              value={password}
              placeholder="Password"
              onChange={this.handleChangeFor('password')}
            /><br />
            {/* <Name /><br />
            <Email /><br />
            <Password /><br /> */}
          </FormGroup>
        </form>
        <Button onClick={this.saveDetails}>Sign Up</Button>
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(SignUp);
