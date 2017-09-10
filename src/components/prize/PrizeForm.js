import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const PrizeForm = ({prize, allSponsors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Prize</h1>
      <TextInput
        name="name"
        label="Name"
        defaultValue={prize.Name}
        onChange={onChange}
        error={errors.Name}/>

       <SelectInput
        name="sponsorId"
        label="Sponsor"
        defaultValue={prize.SponsorId}
        defaultOption="Select Sponsor"
        options={allSponsors}
        onChange={onChange} error={errors.SponsorId}/>

       <TextInput
        name="Description"
        label="Description"
        defaultValue={prize.Description}
        onChange={onChange}
        error={errors.Description}/>

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}/>

    </form>
  );
};

PrizeForm.propTypes = {
  prize: React.PropTypes.object.isRequired,
  allSponsors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default PrizeForm;
