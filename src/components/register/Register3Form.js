import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const Register3Form = ({registration, onNext, onPrev, onChange, errors}) => {
  return (
    <form>
      <h1>Address</h1>
      <TextInput
        name="street1"
        label="Street"
        defaultValue={registration.Street1}
        onChange={onChange}
        error={errors.Street1}/>

      <TextInput
        name="street2"
        label=""
        defaultValue={registration.Street2}
        onChange={onChange}
        error={errors.Street2}/>

      <TextInput
        name="city"
        label="City"
        defaultValue={registration.City}
        onChange={onChange}
        error={errors.City}/>

      <TextInput
        name="state"
        label="State"
        defaultValue={registration.State}
        onChange={onChange}
        error={errors.State}/>

      <TextInput
        name="zip"
        label="Zip"
        defaultValue={registration.Zip}
        onChange={onChange}
        error={errors.Zip}/>

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

Register3Form.propTypes = {
  registration: React.PropTypes.object.isRequired,
  onPrev: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default Register3Form;
