import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl } from 'react-bootstrap';

class Name extends Component {
  handleNameChange = (e) => {
    const { onChange } = this.props;
    onChange({ name: e.target.value });
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <FormGroup>
          <FormControl
            type="text"
            value={name}
            placeholder="Enter Name"
            onChange={this.handleNameChange}
          /><br />
        </FormGroup>
      </div>
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
