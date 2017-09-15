/**
 * Created by John on 8/3/2016.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import SelectInput from '../common/SelectInput';

const PendingGameListRow = ({pendingGame, allStatuses, onChange}) => {
  return (
    <tr>
      <td>
        <div>
          <span><h4>{pendingGame.Title}</h4></span>
          <br/>
          <SelectInput
            name="status"
            label="Status"
            value={pendingGame.Approved}
            options={allStatuses}
            onChange={onChange}/>
          <br/>
          <div>
            <span><label>Description </label>{pendingGame.Description}</span>
            <br/>
            <span><label>Category </label>{pendingGame.Category}</span>
          </div>
        </div>
      </td>
    </tr>
  );
};

PendingGameListRow.propTypes = {
  pendingGame: PropTypes.object.isRequired,
  allStatuses: PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default PendingGameListRow;
