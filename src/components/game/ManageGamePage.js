import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import GameForm from './GameForm';

export class ManageGamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, this.props.game),
      errors: {}
    };
  }

  render() {
    return (
        <GameForm
          game={this.state.game}
          errors={this.state.errors}
        />
     );
  }
}

ManageGamePage.PropTypes = {
  game: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  let game = {id: 0, Name: '', Description: ''};
  return {
    game: game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);


