import React from 'react';
import './Activity.css'
const Activity = ({ goal, setGoal }) => {
    const { img, name, time } = goal;
    return (
        <div className='display-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Time : {time}m</p>
            <button className='btn-cart'>Add to List</button>
        </div>
    );
};

export default Activity;