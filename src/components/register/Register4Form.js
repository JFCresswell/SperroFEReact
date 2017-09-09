import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const Register4Form = ({mysperro, onNext, onPrev, onChange, errors}) => {
  return (
    <form>
      <h1>Contact Information</h1>

      <TextInput
        name="telephone"
        label="Main Phone"
        defaultValue={mysperro.Phone}
        onChange={onChange}
        error={errors.State}/>

      <TextInput
        name="cell"
        label="Cell Phone"
        defaultValue={mysperro.Cell}
        onChange={onChange}
        error={errors.State}/>

      <TextInput
        name="email"
        label="Email"
        defaultValue={mysperro.Email}
        onChange={onChange}
        error={errors.State}/>

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

Register4Form.propTypes = {
  mysperro: React.PropTypes.object.isRequired,
  onPrev: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default Register4Form;
