import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as prizeActions from '../../actions/prizeActions';
import {bindActionCreators} from 'redux';
import PrizeList from './PrizeList';
import {browserHistory, Link} from 'react-router';

class PrizesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddPrizePage = this.redirectToAddPrizePage.bind(this);
    this.redirectToAddSponsorPage = this.redirectToAddSponsorPage.bind(this);
  }

  redirectToAddPrizePage() {
    browserHistory.push('/prize');
  }

  redirectToAddSponsorPage() {
    browserHistory.push('/sponsor');
  }

  render() {
    const {prizes} = this.props;

    return (
      <div>
        <h2>Prizes</h2>
        <div className="btn-group">
          <input type="submit"
                 value="Add Prize"
                 className="btn btn-primary"
                 onClick={this.redirectToAddPrizePage}/>
          <input
            type="button"
            value="Add Sponsor"
            className="btn"
            onClick={this.redirectToAddSponsorPage}/>
        </div>
        <PrizeList prizes={prizes}/>
      </div>
    );
  }
}

PrizesPage.propTypes = {
  prizes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    prizes: state.prizes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(prizeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrizesPage);

