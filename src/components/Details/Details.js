import React, { useEffect, useState } from 'react';
import Salary from '../Salary/Salary';
import Teacher from '../Teacher/Teacher';
import './Details.css'

const Details = () => {
    const [teachers, setTeachers] = useState([]);
    const [counts, setCounts] = useState([])


    useEffect(() => {
        fetch('./teacher.json')
        .then(res => res.json())
        .then(data => setTeachers(data));
    },[])

    const buttonHandle = teachers =>{
        const mySalary = [...counts,teachers];
        setCounts(mySalary)
    }
    
    // TOTAL SALLAY COUNT AREA
    const mySalary = (previous, current) => previous + current.salary
    const total = counts.reduce(mySalary, 0)

    return (
        <div className='details'>
            <div className='teacher'>
                {
                    counts.map(count => <Salary count={count}></Salary>)
                }
                 <div className='all-details'>
                        <h1>Salary Details</h1>
                        <h2>Teacher Count: {counts.length}</h2>
                        <h3>Total: {total}</h3>
                 </div>
                 
            </div>
            <div className='show-teacher'>
                {
                    teachers.map(teacher => <Teacher key={teacher.name} buttonHandle={buttonHandle} teacher={teacher}></Teacher>)
                }
            </div>
        </div>
    );
};

export default Details;