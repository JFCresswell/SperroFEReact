import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

class RegisterPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <div>
        <h1>Register</h1>
      </div>
    );
  }
}

export default RegisterPage;
