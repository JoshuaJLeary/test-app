import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';

class Name extends Component {
  handleNameChange = (e) => {
    const { onChange } = this.props;
    onChange({ name: e.target.value });
  }

  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <FormControl
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={this.handleNameChange}
        /><br />
      </React.Fragment>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { name } = state.user;
  return { name };
};

export default connect(mapStateToProps)(Name);
