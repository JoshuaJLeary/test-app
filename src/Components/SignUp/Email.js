import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';

class Email extends Component {
  handleEmailChange = (e) => {
    const { onChange } = this.props;
    onChange({ email: e.target.value });
  }

  render() {
    const { email } = this.props;
    return (
      <React.Fragment>
        <FormControl
          type="email"
          value={email}
          placeholder="Email Address"
          onChange={this.handleEmailChange}
        /><br />
      </React.Fragment>
    );
  }
}

Email.propTypes = {
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { email } = state.user;
  return { email };
};

export default connect(mapStateToProps)(Email);
