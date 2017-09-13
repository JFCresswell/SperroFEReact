import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as supportedGameActions from '../../actions/supportedGameActions';
import {bindActionCreators} from 'redux';
import SupportedGameList from './SupportedGameList';
import {Link} from 'react-router';

class SupportedGamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {supportedGames} = this.props;

    return (
      <div>
        <h2>Supported Games</h2>
        <SupportedGameList supportedGames={supportedGames}/>
      </div>
    );
  }
}

SupportedGamesPage.propTypes = {
  supportedGames: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    supportedGames: state.supportedGames
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(supportedGameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SupportedGamesPage);
