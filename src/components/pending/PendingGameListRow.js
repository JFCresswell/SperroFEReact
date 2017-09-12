/**
 * Created by John on 8/3/2016.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PendingGameListRow = ({game}) => {
  return (
    <tr>
      <td>
        <div>
          <span><h4>{game.Title}</h4></span>
          <br/>
          <span><label>Status</label>
            <select value={game.Approved}>
              <option value="0">Pending</option>
              <option value="1">Approve</option>
              <option value="2">Reject</option>
            </select>
          </span>
          <br/>
          <div>
            <span><label>Description </label>{game.Description}</span>
            <br/>
            <span><label>Category </label>{game.Category}</span>
          </div>
        </div>
      </td>
    </tr>
  );
};

PendingGameListRow.propTypes = {
  game: PropTypes.object.isRequired
};

export default PendingGameListRow;
