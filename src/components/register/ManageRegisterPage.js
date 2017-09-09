import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as registrationActions from '../../actions/registrationActions';
import Register1Form from './Register1Form';
// import Register2Form from './Register2Form';
// import Register3Form from './Register3Form';
// import Register4Form from './Register4Form';
// import Register5Form from './Register5Form';

 import {genericFormattedForDropdown,
         numericRangeOpenFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageRegisterPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  this.state = {
      registration: Object.assign({}, props.registration),
      genders: genericFormattedForDropdown([
        {id: 0, display: 'Unknown'},
        {id: 1, display:'Male'},
        {id: 2, display: 'Female'},
        {id: 3, display: 'Prefer not to specify'}
        ]),
      maritalStatus: genericFormattedForDropdown([
        {id: 0, display: 'Single'},
        {id: 1, display:'Married'},
        {id: 2, display: 'Widowed'},
        {id: 3, display: 'Divorced'},
        {id: 4, display: 'Prefer not to specify'}
      ]),
      education: genericFormattedForDropdown([
        {id: 0, display: 'Less than High School'},
        {id: 1, display: 'High School Degree or Equivalent (GED)'},
        {id: 2, display: 'Some College'},
        {id: 3, display: 'Associates Degree'},
        {id: 4, display: 'Bachelors Degree'},
        {id: 5, display: 'Graduate Degree'}
       ]),
      income: genericFormattedForDropdown([
        {id: 0, display: '$0 - $9,999'},
        {id: 1, display: '$10,000 - $19,999'},
        {id: 2, display: '$20,000 - $29,999'},
        {id: 3, display: '$30,000 - $39,999'},
        {id: 4, display: '$40,000 - $49,999'},
        {id: 5, display: '$50,000 - $59,999'},
        {id: 6, display: '$60,000 - $69,999'},
        {id: 7, display: '$70,000 - $79,999'},
        {id: 8, display: '$80,000 - $89,999'},
        {id: 9, display: '$90,000 - $99,999'},
        {id: 10, display: '$100,000 or more'}
      ]),
    householdIncome: genericFormattedForDropdown([
      {id: 0, display: '$0 - $9,999'},
      {id: 1, display: '$10,000 - $19,999'},
      {id: 2, display: '$20,000 - $29,999'},
      {id: 3, display: '$30,000 - $39,999'},
      {id: 4, display: '$40,000 - $49,999'},
      {id: 5, display: '$50,000 - $59,999'},
      {id: 6, display: '$60,000 - $69,999'},
      {id: 7, display: '$70,000 - $79,999'},
      {id: 8, display: '$80,000 - $89,999'},
      {id: 9, display: '$90,000 - $99,999'},
      {id: 10, display: '$100,000 - $109,999'},
      {id: 11, display: '$110,000 - $119,999'},
      {id: 12, display: '$120,000 - $129,999'},
      {id: 13, display: '$130,000 - $139,999'},
      {id: 14, display: '$140,000 - $149,999'},
      {id: 15, display: '$150,000 or more'}
    ]),
    householdSize: numericRangeOpenFormattedForDropdown(1, 10),
    livingSituation: genericFormattedForDropdown([
        {id: 0, display: 'Own'},
        {id: 1, display: 'Rent'}
    ]),
    errors: {},
    saving: false,
    page: 1,
    lastpage: 5,
    confirmPassword: ''
    };

    this.updateRegistrationState = this.updateRegistrationState.bind(this);
  }

  moveNext(event) {
    if (this.state.page < this.state.lastpage) {
      this.state.page++;
      this.setState(this.state);
    }
  }

  movePrev (event) {
    if (this.state.page > 1) {
      this.state.page--;
      this.setState(this.state);
    }
  }

  updateRegistrationState(event) {
    const field = event.target.name;
    let registration = this.state.registration;
    registration[field] = event.target.value;
    return this.setState({registration: registration});
  }

  render() {
    if (this.state.page === 1) {
      return (
        <Register1Form
          onChange={this.updateMySperroState}
          onNext={this.moveNext}
          registration={this.state.registration}
          confirm={this.state.confirmPassword}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      );
    }
  }

}

ManageRegisterPage.propTypes = {
  registration: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageRegisterPage.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  let registration = {Id: 0};

  if (state.registration) {
    registration = state.registration;
  }

  return {
    registration: registration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registrationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRegisterPage);

