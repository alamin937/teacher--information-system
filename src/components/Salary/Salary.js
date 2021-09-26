import React from 'react';
import './Salary.css'

const Salary = (props) => {
    const {name} = props.count
    return (
        <div className='salary'>
              <h3>Name: {name}</h3>
        </div>
    );
};

export default Salary;