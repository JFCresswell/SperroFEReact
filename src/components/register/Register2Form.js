import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const Register2Form = ({registration, allGenders, maritalStatus, onNext, onPrev, onChange, errors}) => {
  return (
    <form>
      <h1>Personal information</h1>
      <TextInput
        name="fname"
        label="First Name"
        defaultValue={registration.FirstName}
        onChange={onChange}
        error={errors.FirstName}/>

      <TextInput
        name="mname"
        label="Middle Name"
        defaultValue={registration.MiddleName}
        onChange={onChange}
        error={errors.LastName}/>

      <TextInput
        name="lname"
        label="Last Name"
        defaultValue={registration.LastName}
        onChange={onChange}
        error={errors.LastName}/>

      <TextInput
        name="dob"
        label="Date of Birth"
        defaultValue={registration.DateOfBirth}
        onChange={onChange}
        error={errors.DateOfBirth}/>

      <SelectInput
        name="gender"
        label="Gender"
        defaultValue={registration.GenderId}
        defaultOption="Select Gender"
        options={allGenders}
        onChange={onChange} error={errors.GenderId}/>

      <SelectInput
        name="maritalstatus"
        label="Marital Status"
        defaultValue={registration.MaritalStatusId}
        defaultOption="Select Marital Status"
        options={maritalStatus}
        onChange={onChange} error={errors.MaritalStatusId}/>

      <input
        type="button"
        value={'Prev'}
        className="btn"
        onClick={onPrev}/>

      <input
        type="button"
        value={'Next'}
        className="btn btn-primary"
        onClick={onNext}/>

    </form>
  );
};

Register2Form.propTypes = {
  registration: React.PropTypes.object.isRequired,
  onPrev: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  allGenders: React.PropTypes.array.isRequired,
  maritalStatus: React.PropTypes.array.isRequired,
  errors: React.PropTypes.object
};

export default Register2Form;
