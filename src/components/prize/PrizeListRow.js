import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PrizeListRow = ({prize}) => {
  return (
    <tr>
      <td>{prize.Name}</td>
      <td>{prize.Description}</td>
    </tr>
  );
};

PrizeListRow.propTypes = {
  prize: PropTypes.object.isRequired
};

export default PrizeListRow;
