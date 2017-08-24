import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const GameForm = ({game, allCompanies, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Game</h1>
      <TextInput
        name="name"
        label="Name"
        value={game.Name}
        onChange={onChange}
        error={errors.Name}/>

      <SelectInput
        name="companyId"
        label="Company"
        value={game.CompanyId}
        defaultOption="Select Company"
        options={allCompanies}
        onChange={onChange} error={errors.Id}/>

      <TextInput
        name="description"
        label="Description"
        value={game.Description}
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

GameForm.propTypes = {
  game: React.PropTypes.object.isRequired,
  allCompanies: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default GameForm;
