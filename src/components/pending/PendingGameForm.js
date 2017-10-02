import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const PendingGameForm = ({pendingGame, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Pending Game</h1>
      <TextInput
        name="title"
        label="Title"
        defaultValue={pendingGame.Title}
        onChange={onChange}
        error={errors.Title}/>

       <TextInput
        name="Description"
        label="Description"
        defaultValue={pendingGame.Description}
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

PendingGameForm.propTypes = {
  pendingGame: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default PendingGameForm;
