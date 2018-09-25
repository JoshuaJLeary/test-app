import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { password } = this.state;
    return (
      <div>
        <FormGroup>
          <FormControl
            type="text"
            value={password}
            placeholder="Password"
            onChange={this.handlePasswordChange}
          /><br />
        </FormGroup>
      </div>
    );
  }
}

export default Password;
