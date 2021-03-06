import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pendingGameActions from '../../actions/pendingGameActions';
import PendingGameForm from './PendingGameForm';

export class ManagePendingGamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pendingGame: Object.assign({}, props.pendingGame),
      errors: {},
      saving: false
    };

    this.updatePendingGameState = this.updatePendingGameState.bind(this);
    this.savePendingGame = this.savePendingGame.bind(this);
  }

  savePendingGame(event) {
    // TODO
  }

  updatePendingGameState(event) {
    const field = event.target.name;
    let pendingGame = this.state.pendingGame;
    pendingGame[field] = event.target.value;
    return this.setState({pendingGame: pendingGame});
  }

  render() {
    return (
      <PendingGameForm
        pendingGame={this.state.pendingGame}
        onChange={this.updatePendingGameState}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManagePendingGamePage.propTypes = {
  pendingGame: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManagePendingGamePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let pendingGame = {Id: 0, Title: '', Description: '', Category: '', Approved: 0};

  if (state.pendingGame) {
    pendingGame = state.pendingGame;
  }

  return {
    pendingGame: pendingGame
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pendingGameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePendingGamePage);


