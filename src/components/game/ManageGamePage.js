import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import GameForm from './GameForm';
import toastr from 'toastr';

export class ManageGamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, this.props.game),
      errors: {},
      saving: false
    };

    this.updateGameState = this.updateGameState.bind(this);
    this.saveGame = this.saveGame.bind(this);
  }

    componentWillReceiveProps(nextProps) {
    if (this.props.game.Id != nextProps.game.Id) {
      this.setState({game: Object.assign({}, nextProps.game)});
    }
  }

  updateGameState(event) {
    const field = event.target.name;
    let game = Object.assign({}, this.state.game);
    game[field] = event.target.value;

    return this.setState({game: game});
  }

  saveGame(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveGame(this.state.game)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
      this.setState({saving: false});
      toastr.success('Game saved');
      this.context.router.push('/games');
  }

  render() {
    return (
        <GameForm
          allCompanies={this.props.companies}
          onChange={this.updateGameState}
          onSave={this.saveGame}
          game={this.state.game}
          errors={this.state.errors}
          saving={this.state.saving}
        />
     );
  }
}

ManageGamePage.propTypes = {
  game: PropTypes.object.isRequired,
  companies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageGamePage.contextTypes = {
  router: PropTypes.object
};

function getGameById(games, id) {
  const game = games.filter(game => game.Id === parseInt(id));
  if (game) return game[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  let game = {Id: 0, Name: '', Description: '', CompanyId: 0};

  const gameId = ownProps.params.id; // from the path `/game/:id`

   if (gameId && state.games.length > 0) {
    game = getGameById(state.games, gameId);
  }

  const companiesFormattedForDropdown = state.companies.map(company => {
    return {
      value: company.Id,
      text: company.Name
    };
  });

  return {
    game: game,
    companies: companiesFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);


