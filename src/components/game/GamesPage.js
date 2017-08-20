import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';

class GamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event) {
    const game = this.state.game;
    game.title = event.target.value;
    this.setState({game: game});
  }

  onClickSave(event) {
    this.props.actions.createGame(this.state.game);
  }

  gameRow(game, index) {
    return <div key={index}>{game.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Games</h1>
        {this.props.games.map(this.gameRow)}
        <h2>Add Game</h2>

        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.game.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />

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

