import React, { Component } from 'react';
import { connect } from 'react-redux';

class Welcome extends Component {
  render() {
    const signUpDetails = this.props;
    return (
      <React.Fragment>
        <h2>Welcome</h2>
        <h1>{signUpDetails.name}</h1>
        <p>You have been registered for this awesome service.
          Please check your email listed below for instructions.
        </p>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Welcome);
