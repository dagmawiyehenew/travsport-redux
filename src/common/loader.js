import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

export default function Loader() {
  return (
    <>
      <MDBSpinner grow color='info' className="mx-auto d-block" style={{ width: '3rem', height: '3rem' }}>
        <span className='visually-hidden mx-auto'>Loading...</span>
      </MDBSpinner>
    </>
  );
}