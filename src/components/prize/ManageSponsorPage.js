import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sponsorActions from '../../actions/sponsorActions';
import SponsorForm from './SponsorForm';
import toastr from 'toastr';

export class ManageSponsorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      sponsor: Object.assign({}, props.sponsor),
      errors: {},
      saving: false
    };

    this.updateSponsorState = this.updateSponsorState.bind(this);
    this.saveSponsor = this.saveSponsor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sponsor.id != nextProps.sponsor.id) {
      // Necessary to populate form when existing prize is loaded directly.
      this.setState({sponsor: Object.assign({}, nextProps.sponsor)});
    }
  }

  updateSponsorState(event) {
    const field = event.target.name;
    let sponsor = this.state.sponsor;
    sponsor[field] = event.target.value;
    return this.setState({sponsor: sponsor});
  }

  sponsorFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.sponsor.companyName.length < 5) {
      errors.companyName = 'Company Name must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveSponsor(event) {
    event.preventDefault();

    if (!this.sponsorFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveSponsor(this.state.sponsor)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Sponsor saved');
    this.context.router.push('/prizes');
  }

  render() {
    return (
      <SponsorForm
        onChange={this.updateSponsorState}
        onSave={this.saveSponsor}
        sponsor={this.state.sponsor}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageSponsorPage.propTypes = {
  sponsor: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageSponsorPage.contextTypes = {
  router: PropTypes.object
};

function getSponsorById(sponsors, id) {
  const sponsor = sponsors.filter(sponsor => sponsor.id == id);
  if (sponsor) return sponsor[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const sponsorId = ownProps.params.id; // from the path `/sponsor/:id`

  let sponsor = {id: 0, companyName: '', business: ''};

  if (sponsorId && state.sponsors.length > 0) {
    sponsor = getSponsorById(state.sponsors, sponsorId);
  }

  return {
    sponsor: sponsor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sponsorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSponsorPage);

