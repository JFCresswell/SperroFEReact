import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const GameListRow = ({game}) => {
  return (
    <tr>
      <td><Link to={'/game/' + game.Id}>{game.Name}</Link></td>
      <td>{game.Description}</td>
    </tr>
  );
};

GameListRow.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameListRow;
