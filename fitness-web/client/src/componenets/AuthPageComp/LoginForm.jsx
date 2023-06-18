import React from "react";

// bootstrap imports
import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
  
} from "mdb-react-ui-kit";

function LoginForm({ email, password, handleEmailChange, handlePasswordChange, handleSubmit }) {
  return (
      
      <MDBValidation className='row g-3' >
        <MDBValidationItem feedback='Please choose an Email.' invalid className='col-md-12'>
          <MDBInput
            value={email}
            name='email'
            onChange={handleEmailChange}
            id='email'
            required
            label='Email address'
            type='email'
            size="lg"
            labelClass='text-white'
            style={{ color: 'white' }}
          />
        </MDBValidationItem>
        <MDBValidationItem feedback='Please choose a Password.' invalid className='col-md-12'>
          <MDBInput
            value={password}
            name='password'
            onChange={handlePasswordChange}
            id='password'
            required
            label='Password'
            type='password'
            size="lg"
            labelClass='text-white'
            inputClass='text-white'
            style={{ color: 'white' }}
          />
        </MDBValidationItem>
        <div className="d-flex justify-content-center">
          <MDBBtn
            outline
            className='mx-2 px-5'
            color='white'
            size='lg'
            type='submit'
            inputClass='text-white'
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
            style={{ margin: '2vh' }}
            onClick={handleSubmit}
          >
            Login
          </MDBBtn>
        </div>
      </MDBValidation>
    );
}
  export default LoginForm;