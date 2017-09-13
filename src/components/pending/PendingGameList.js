/**
 * Created by John on 8/3/2016.
 */
import React, {PropTypes} from 'react';
import PendingGameListRow from './PendingGameListRow';

const PendingGameList = ({pendingGames}) => {
  return (
    <table className="table">
      {/*<thead>*/}
      {/*<tr>*/}
        {/*<th>Title</th>*/}
        {/*<th>Description</th>*/}
        {/*<th>Approval Status</th>*/}
      {/*</tr>*/}
      {/*</thead>*/}
      <tbody>
      {pendingGames.map(pendingGame =>
        <PendingGameListRow key={pendingGame.Id} pendingGame={pendingGame}/>
      )}
      </tbody>
    </table>
  );
};

PendingGameList.propTypes = {
  pendingGames: PropTypes.array.isRequired
};

export default PendingGameList;
