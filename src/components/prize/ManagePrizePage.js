import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as prizeActions from '../../actions/prizeActions';
import PrizeForm from './PrizeForm';
import {sponsorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManagePrizePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      prize: Object.assign({}, props.prize),
      errors: {},
      saving: false
    };

    this.updatePrizeState = this.updatePrizeState.bind(this);
    this.savePrize = this.savePrize.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.prize.Id != nextProps.prize.Id) {
      // Necessary to populate form when existing prize is loaded directly.
      this.setState({prize: Object.assign({}, nextProps.prize)});
    }
  }

  updatePrizeState(event) {
    const field = event.target.name;
    let prize = this.state.prize;
    prize[field] = event.target.value;
    return this.setState({prize: prize});
  }

  prizeFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.prize.Name.length < 5) {
      errors.Name = 'Name must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

   savePrize(event) {
    event.preventDefault();

    if (!this.prizeFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.savePrize(this.state.prize)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Prize saved');
    this.context.router.push('/prizes');
  }

  render() {
    return (
      <PrizeForm
        allSponsors={this.props.sponsors}
        onChange={this.updatePrizeState}
        onSave={this.savePrize}
        prize={this.state.prize}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManagePrizePage.propTypes = {
  prize: PropTypes.object.isRequired,
  sponsors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManagePrizePage.contextTypes = {
  router: PropTypes.object
};

function getPrizeById(prizes, id) {
  const prize = prizes.filter(prize => prize.Id == id);
  if (prize) return prize[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const prizeId = ownProps.params.Id; // from the path `/prize/:id`

  let prize = {Id: 0, Name: '', Description: ''};

  if (prizeId && state.prizes.length > 0) {
    prize = getPrizeById(state.prizes, prizeId);
  }

  return {
    prize: prize,
    sponsors: sponsorsFormattedForDropdown(state.sponsors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(prizeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePrizePage);

