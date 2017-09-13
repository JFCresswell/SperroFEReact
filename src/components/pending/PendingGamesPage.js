import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as pendingGameActions from '../../actions/pendingGameActions';
import {bindActionCreators} from 'redux';
import PendingGameList from './PendingGameList';
import {Link} from 'react-router';

class PendingGamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  commitDecisions() {
    alert('committed');
  }

  render() {
    const {pendingGames} = this.props;

    return (
      <div>
        <h2>Pending Games</h2>
        <div className="btn-group">
          <input type="submit"
                 value="Commit"
                 className="btn btn-primary"
                 onClick={this.commitDecisions}/>
        </div>
        <PendingGameList pendingGames={pendingGames}/>
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
