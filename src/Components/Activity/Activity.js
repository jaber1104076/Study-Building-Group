import React from 'react';
import './Activity.css'
const Activity = ({ goal, onAddToList }) => {
    const { img, name, time } = goal;

    return (
        <div className='display-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Time : {time}m</p>
            <button onClick={() => onAddToList(time)} className='btn-cart'>Add to List</button>
        </div>
    );
};

export default Activity;