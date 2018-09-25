import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <FormGroup>
          <FormControl
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={this.handleEmailChange}
          /><br />
        </FormGroup>
      </div>
    );
  }
}

export default Email;
