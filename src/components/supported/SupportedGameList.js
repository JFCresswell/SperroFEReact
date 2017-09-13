import React, {PropTypes} from 'react';
import SupportedGameListRow from './SupportedGameListRow';

const SupportedGameList = ({supportedGames}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      {supportedGames.map(supportedGame =>
        <SupportedGameListRow key={supportedGame.Id} supportedGame={supportedGame}/>
      )}
      </tbody>
    </table>
  );
};

SupportedGameList.propTypes = {
  supportedGames: PropTypes.array.isRequired
};

export default SupportedGameList;
