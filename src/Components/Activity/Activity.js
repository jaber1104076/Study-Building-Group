import React from 'react';
import './Activity.css'
const Activity = ({ goal, setGoal, study, setStudy }) => {
    const { img, name, time, id } = goal;
    let prevTime = 0;
    const handleAddtoCart = (id) => {
        prevTime = prevTime + time;
        setStudy(prevTime + study)
    }
    return (
        <div className='display-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Time : {time}m</p>
            <button onClick={() => handleAddtoCart(id)} className='btn-cart'>Add to List</button>
        </div>
    );
};

export default Activity;