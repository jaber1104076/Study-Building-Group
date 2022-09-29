import React, { useEffect, useState } from 'react';
import logo from '../../image/logo.jpg';
import Activity from '../Activity/Activity';
import jaber from '../../image/jaber.jpg'
import './Activities.css'
const Activities = () => {
    const [goals, setGoal] = useState([])

    useEffect(() => {
        fetch('Study.json')
            .then(res => res.json())
            .then(data => setGoal(data))
    }, [])

    return (
        <div>
            <div className="header">
                <img src={logo} alt="" />
                <h1 className='title'>Study For your Future</h1>
            </div>
            <div className="conatiner">
                <div className="main-activity">
                    {
                        goals.map(goal => <Activity
                            goal={goal}
                            setGoal={setGoal}
                        ></Activity>)
                    }
                </div>
                <div className="cart-conatiner">
                    <div className='profile'>
                        <img src={jaber} alt="" />
                        <h5 className='title'>Abdullah Al Jaber</h5>
                    </div>
                    <div className="info">
                        <div className='my-info'>
                            <h3>70kg</h3>
                            <p>Weight</p>
                        </div>
                        <div className='my-info'>
                            <h3>5.5'</h3>
                            <p>Height</p>
                        </div>
                        <div className='my-info'>
                            <h3>28years</h3>
                            <p>Age</p>
                        </div>
                    </div>
                    <div className="break-info">
                        <h2 className='title'>Add a break</h2>
                        <div className="break-button">
                            <button className='btn-break'>10s</button>
                            <button className='btn-break'>20s</button>
                            <button className='btn-break'>30s</button>
                            <button className='btn-break'>40s</button>
                        </div>
                    </div>
                    <div className="study-details">
                        <h2 className='title'>Study Details</h2>
                        <input type="text" placeholder='study time' className='input-field' />
                        <input type="text" placeholder='Break-time' className='input-field' />
                        <button className='activity-button'>Activity Completed</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;