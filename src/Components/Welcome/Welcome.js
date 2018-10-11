import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Welcome extends Component {
  // componentDidMount(value) {
  //   const { dispatch } = this.props;
  //   dispatch({ type: 'SET_DETAILS', value });
  // }

  render() {
    const signUpDetails = this.props;
    // const state = signUpDetails;
    console.log('this is signUpDetails', signUpDetails);
    return (
      <div className="welcome">
        <h2>Welcome,</h2>
        <h1>{signUpDetails.name}</h1>
        <p>You have been registered for this awesome service.
          Please check your email listed below for instructions.
        </p>
        <h2>{signUpDetails.email}</h2>
      </div>
    );
  }
}

// Welcome.propTypes = {
//   dispatch: PropTypes.func,
// };

const mapStateToProps = (state) => {
  const { email, name } = state.user;
  return { email, name };
};

export default connect(mapStateToProps)(Welcome);
