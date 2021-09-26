import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const {img,name,posstion,age,nationality,salary} = props.teacher
    return (
        <div className='show-details'>
            <img src={img} alt="" />
           <div>
                    <h3>Name: {name}</h3>
                    <h3>Posstion: {posstion}</h3>
                    <h3>Age: {age}</h3>
                    <h3>Nationality: {nationality}</h3>
                    <h3>Salary: {salary}</h3>
                    <button onClick={()=>props.buttonHandle(props.teacher)}> <i className="fas fa-shopping-cart"></i> Salary Add</button>
           </div>
        </div>
    );
};

export default Teacher;