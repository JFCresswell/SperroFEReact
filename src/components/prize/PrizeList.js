import React, {PropTypes} from 'react';
import PrizeListRow from './PrizeListRow';

const PrizeList = ({prizes}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      {prizes.map(prize =>
        <PrizeListRow key={prize.Id} prize={prize}/>
      )}
      </tbody>
    </table>
  );
};

PrizeList.propTypes = {
  prizes: PropTypes.array.isRequired
};

export default PrizeList;
