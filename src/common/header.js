import React from 'react';
import {
    MDBNavbar,
    MDBBtn,
    MDBContainer,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

const Header = (props) => {
    const handelLogout = () =>{
        props.logoutUser();
    }
    return (
        
        <MDBNavbar light bgColor='light'>
            <MDBContainer tag="form"  className='justify-content-start'>
            <MDBNavbarBrand href='#'>
            <img
              src='https://www.travsport.se/siteassets/bilder/svensktravsport-logo-ejtext-frilagd.png?center=0.5,0.5&width=300'
              height='30'
              alt=''
              loading='lazy'
            />
            </MDBNavbarBrand>
            <MDBBtn outline center="true" color="secondary" onClick={() => handelLogout()} size="sm" type='button'>
                    Logout
            </MDBBtn>
            </MDBContainer>
      </MDBNavbar>
    );
}

export default Header;