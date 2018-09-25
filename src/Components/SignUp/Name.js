import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl } from 'react-bootstrap';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  userName = () => {
    const { dispatch } = this.props;
    event.preventDefault();
    console.log('state:', this.state);
    dispatch({
      type: 'FETCH_EMAIL',
      payload: this.state,
    });
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
  name: PropTypes.string,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Name);
