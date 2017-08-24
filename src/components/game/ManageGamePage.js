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
          allCompanies={this.props.companies}
          game={this.state.game}
          errors={this.state.errors}
        />
     );
  }
}

ManageGamePage.propTypes = {
  game: PropTypes.string.isRequired,
  companies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let game = {Id: 0, Name: '', Description: '', CompanyId: 0};

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


