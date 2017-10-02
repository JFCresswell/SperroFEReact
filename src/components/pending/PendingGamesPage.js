import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as pendingGameActions from '../../actions/pendingGameActions';
import {bindActionCreators} from 'redux';
import PendingGameList from './PendingGameList';
import {browserHistory, Link} from 'react-router';

 import {genericFormattedForDropdown} from '../../selectors/selectors';

class PendingGamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      statuses : genericFormattedForDropdown([
        {id: 0, display: 'Pending'},
        {id: 1, display: 'Approve'},
        {id: 2, display: 'Reject'}])
    };

    this.updatePendingState = this.updatePendingState.bind(this);
    this.redirectToAddPendingGamePage = this.redirectToAddPendingGamePage.bind(this);
    this.decidePendingGame = this.decidePendingGame.bind(this);
  }

  updatePendingState(event) {
    const field = event.target.name;
    return this.setState({});
  }


  redirectToAddPendingGamePage() {
    browserHistory.push('/pendingGame');
  }

  decidePendingGame() {
    alert('committed');
  }

  render() {
    const {pendingGames} = this.props;

    return (
      <div>
        <h2>Pending Games</h2>
        <div className="btn-group">
          <input type="submit"
                 value="Add Pending Game"
                 className="btn btn-primary"
                 onClick={this.redirectToAddPendingGamePage}/>

          <input type="submit"
                 value="Commit"
                 className="btn btn-primary"
                 onClick={this.decidePendingGame}/>
        </div>
        <PendingGameList
          pendingGames={pendingGames}
          allStatuses={this.state.statuses}
          onChange={this.updatePendingState}/>
      </div>
    );
  }
}

PendingGamesPage.propTypes = {
  pendingGames: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    pendingGames: state.pendingGames
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pendingGameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingGamesPage);
