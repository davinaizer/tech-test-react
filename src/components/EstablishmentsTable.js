import React from 'react';
import { EstablishmentsTableRow } from './EstablishmentsTableRow';
import PropTypes from 'prop-types';
import { LOADING_STATE } from '../constants';

const headerStyle = {
  paddingBottom: '10px',
  textAlign: 'left',
  fontSize: '20px'
};

const renderRows = (loadingState, establishments) => {
  if (loadingState === LOADING_STATE.error) {
    return (
      <tr>
        <td>Error fetching establishments list!!!</td>
      </tr>
    );
  }

  if (loadingState === LOADING_STATE.loading) {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  }

  if (loadingState === LOADING_STATE.idle) {
    if (establishments.length === 0) {
      return (
        <tr>
          <td>No establishments found!</td>
        </tr>
      );
    }

    return establishments.map((establishment, index) => (
      <EstablishmentsTableRow key={index} establishment={establishment} />
    ));
  }
};

export const EstablishmentsTable = ({ loadingState, establishments }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th style={headerStyle}>Business Name</th>
          <th style={headerStyle}>Rating Value</th>
        </tr>

        {renderRows(loadingState, establishments)}
      </tbody>
    </table>
  );
};

EstablishmentsTable.propTypes = {
  loadingState: PropTypes.string.isRequired,
  establishments: PropTypes.array.isRequired
};
