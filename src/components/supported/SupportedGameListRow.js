import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SupportedGameListRow = ({supportedGame}) => {
  return (
    <tr>
      <td>{supportedGame.Title}</td>
      <td>{supportedGame.Description}</td>
    </tr>
  );
};

SupportedGameListRow.propTypes = {
  supportedGame: PropTypes.object.isRequired
};

export default SupportedGameListRow;
