import React from 'react';
import './Header.css'
import logo from'../../BUBT-Logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='new'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='bangladesh'>
               <h1>BANGLADESH UNIVERSITY OF BUSSINESS AND TECHNOLOGY</h1>
               <h1>Teacher Details</h1>
               <h1>Salary Budget: 2000000</h1>
            </div>
            </div>
           <nav>
               <a href="/home">Home</a>
               <a href="/about">About</a>
               <a href="/contanct">Contact</a>
               <a href="/contanct">Teacher Details</a>
           </nav>
        </div>
    );
};

export default Header;