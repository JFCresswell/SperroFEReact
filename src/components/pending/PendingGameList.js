/**
 * Created by John on 8/3/2016.
 */
import React, {PropTypes} from 'react';
import PendingGameListRow from './PendingGameListRow';

const PendingGameList = ({games}) => {
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
      {games.map(game =>
        <PendingGameListRow key={game.Id} game={game}/>
      )}
      </tbody>
    </table>
  );
};

PendingGameList.propTypes = {
  games: PropTypes.array.isRequired
};

export default PendingGameList;
