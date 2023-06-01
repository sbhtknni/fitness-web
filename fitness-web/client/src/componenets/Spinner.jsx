import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

export default function Spinner() {
  return (
    <>
      <MDBSpinner grow color='primary'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='mx-2' color='secondary'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow color='success'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='mx-2' color='warning'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow color='danger'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='mx-2' color='info'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
    
      <MDBSpinner grow className='ms-2' color='dark'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
    </>
  );
}