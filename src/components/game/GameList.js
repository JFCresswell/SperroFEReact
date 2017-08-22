import React, {PropTypes} from 'react';
import GameListRow from './GameListRow';

const GameList = ({games}) => {
  return (
    <table className = "table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {games.map(game =>
          <GameListRow key={game.Id} game={game} />
        )}
      </tbody>
    </table>
  );
};

GameList.propTypes = {
  games: PropTypes.array.isRequired
};

export default GameList;
