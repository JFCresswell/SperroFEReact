import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const Register1Form = ({registration, confirm, onNext, onChange, errors}) => {
  return (
    <form>
      <h1>Logon information</h1>
      <TextInput
        name="uid"
        label="User Id"
        defaultValue={registration.UserId}
        onChange={onChange}
        error={errors.UserId}/>

       <TextInput
        name="password"
        label="Password"
        defaultValue={registration.Password}
        onChange={onChange}
        error={errors.Password}/>

      <TextInput
        name="confirmpassword"
        label="Confirm Password"
        defaultValue={confirm}
        onChange={onChange}
        error={errors.ConfirmPassword}/>

      <input
        type="button"
        value={'Next'}
        className="btn btn-primary"
        onClick={onNext}/>

    </form>
  );
};

Register1Form.propTypes = {
  registration: React.PropTypes.object.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  confirm: React.PropTypes.string.isRequired,
  errors: React.PropTypes.object
};

export default Register1Form;
