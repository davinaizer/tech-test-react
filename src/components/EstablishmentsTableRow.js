import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
  fontSize: '20px'
};

export const EstablishmentsTableRow = ({ establishment }) => {
  return (
    <tr>
      <td style={rowStyle}>{establishment.BusinessName}</td>
      <td style={rowStyle}>{establishment.RatingValue}</td>
    </tr>
  );
};

EstablishmentsTableRow.propTypes = {
  establishment: PropTypes.object
};
