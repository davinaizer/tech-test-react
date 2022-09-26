import React from 'react';
import PropTypes from 'prop-types';

const navStyle = {
  marginTop: '1rem'
};
const buttonStyle = {
  margin: '0 5px'
};

export const EstablishmentsTableNavigation = ({
  pageNum,
  pageCount,
  onPreviousPage,
  onNextPage
}) => {
  return (
    <nav style={navStyle}>
      {
        <button
          type="button"
          style={buttonStyle}
          disabled={pageNum <= 1}
          onClick={onPreviousPage}
        >
          {'<<'}
        </button>
      }
      {pageNum}
      {
        <button
          type="button"
          style={buttonStyle}
          disabled={pageNum >= pageCount}
          onClick={onNextPage}
        >
          {'>>'}
        </button>
      }
    </nav>
  );
};

EstablishmentsTableNavigation.propTypes = {
  pageNum: PropTypes.number,
  pageCount: PropTypes.number,
  onPreviousPage: PropTypes.func,
  onNextPage: PropTypes.func
};
