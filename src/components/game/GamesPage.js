import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import GameList from './GameList';

class GamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  gameRow(game, index) {
    return <div key={index}>{game.Name}</div>;
  }

  render() {
    const {games} = this.props;

    return (
      <div>
        <h1>Games</h1>
        <GameList games={games}/>
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);

