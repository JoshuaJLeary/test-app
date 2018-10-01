import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';

class Password extends Component {
  handlePasswordChange = (e) => {
    const { onChange } = this.props;
    onChange({ password: e.target.value });
  }

  render() {
    const { password } = this.props;
    return (
      <React.Fragment>
        <FormControl
          type="password"
          value={password}
          placeholder="Password"
          onChange={this.handlePasswordChange}
        /><br />
      </React.Fragment>
    );
  }
}

Password.propTypes = {
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { password } = state.user;
  return { password };
};

export default connect(mapStateToProps)(Password);
