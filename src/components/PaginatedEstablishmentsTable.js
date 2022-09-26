import React, { useState, useEffect } from 'react';
import { EstablishmentsTable } from './EstablishmentsTable';
import { EstablishmentsTableNavigation } from './EstablishmentsTableNavigation';
import { getEstablishmentRatings } from '../api/ratingsAPI';
import { LOADING_STATE } from '../constants';

const tableStyle = {
  background: 'rgba(51, 51, 51, 0.9)',
  padding: '10px',
  width: 'max-content',
  marginLeft: '50px',
  color: 'white'
};

export const PaginatedEstablishmentsTable = () => {
  const [error, setError] = useState(null);
  const [loadingState, setLoadingState] = useState(LOADING_STATE.idle);
  const [establishments, setEstablishments] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [pageCount, setPageCount] = useState(100);

  const fetchEstablishments = () => {
    setLoadingState(LOADING_STATE.loading);

    getEstablishmentRatings(pageNum).then(
      result => {
        setLoadingState(LOADING_STATE.idle);
        setEstablishments(result.establishments);
      },
      error => {
        setLoadingState(LOADING_STATE.error);
        setError(error);
      }
    );
  };

  useEffect(() => {
    fetchEstablishments();
  }, [pageNum]);

  async function handlePreviousPage() {
    pageNum > 1 && setPageNum(pageNum - 1);
  }

  async function handleNextPage() {
    pageNum < pageCount && setPageNum(pageNum + 1);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={tableStyle}>
      <h2>Food Hygiene Ratings</h2>

      <EstablishmentsTable
        loadingState={loadingState}
        establishments={establishments}
      />

      <EstablishmentsTableNavigation
        pageNum={pageNum}
        pageCount={pageCount}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};
