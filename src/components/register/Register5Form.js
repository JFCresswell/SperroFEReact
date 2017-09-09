import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const Register5Form = ({registration, allEducation, allIncome, allHouseholdSize, householdIncome, livingSituation, onNext, onPrev, onChange, errors}) => {
  return (
    <form>
      <h1>General Information</h1>

      <SelectInput
        name="education"
        label="Highest education level"
        defaultValue={registration.EducationLevelId}
        defaultOption="Select Education Level"
        options={allEducation}
        onChange={onChange} error={errors.EducationLevelId}/>

      <SelectInput
        name="income"
        label="Income Range"
        defaultValue={registration.IncomeRangeId}
        defaultOption="Select Income Range"
        options={allIncome}
        onChange={onChange} error={errors.IncomeRangeId}/>

      <SelectInput
        name="householdsize"
        label="Household Size"
        defaultValue={registration.HouseholdSizeId}
        defaultOption="Select Household size"
        options={allHouseholdSize}
        onChange={onChange} error={errors.HouseholdSizeId}/>

      <SelectInput
        name="householdincome"
        label="Household Income"
        defaultValue={registration.HouseholdIncomeId}
        defaultOption="Select Household Income"
        options={householdIncome}
        onChange={onChange}
        error={errors.HouseholdIncomeId}/>

      <SelectInput
        name="livingsituation"
        label="Living Situation"
        defaultValue={registration.LivingSituationId}
        defaultOption="Select Living Situation"
        options={livingSituation}
        onChange={onChange}
        error={errors.LivingSituationId}/>

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

Register5Form.propTypes = {
  registration: React.PropTypes.object.isRequired,
  onPrev: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  allEducation: React.PropTypes.array.isRequired,
  allIncome: React.PropTypes.array.isRequired,
  allHouseholdSize: React.PropTypes.array.isRequired,
  householdIncome: React.PropTypes.array.isRequired,
  livingSituation: React.PropTypes.array.isRequired,
  errors: React.PropTypes.object
};

export default Register5Form;
