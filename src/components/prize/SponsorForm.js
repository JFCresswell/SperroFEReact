/**
 * Created by John on 8/18/2016.
 */
import React from 'react';
import TextInput from '../common/TextInput';

const SponsorForm = ({sponsor, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Add Sponsor</h1>
      <TextInput
        name="companyName"
        label="Company Name"
        value={sponsor.CompanyName}
        onChange={onChange}
        error={errors.CompanyName}/>

      <TextInput
        name="business"
        label="Business"
        value={sponsor.Business}
        onChange={onChange}
        error={errors.Business}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>

    </form>
  );
};

SponsorForm.propTypes = {
  sponsor: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SponsorForm;
