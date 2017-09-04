import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }
}

export default LoginPage;

