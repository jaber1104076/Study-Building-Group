import React, { useEffect, useState } from 'react';
import logo from '../../image/logo.jpg';
import Activity from '../Activity/Activity';
import jaber from '../../image/jaber.jpg';
import './Activities.css';
import Swal from 'sweetalert2'
const Activities = () => {
    const [goals, setGoal] = useState([])
    const [time, setTime] = useState(0);
    const [study, setStudy] = useState(0);

    useEffect(() => {
        fetch('Study.json')
            .then(res => res.json())
            .then(data => setGoal(data))
    }, [])

    const handleBreakTime = (time) => {
        setTime(time);
        //return time;
    }
    const handleActivity = (id) => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }

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
                            key={goal.id}
                            onAddToList={(time) => setStudy(study + time)}
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
                            <button className='btn-break' onClick={() => handleBreakTime(10)}>10s</button>
                            <button className='btn-break' onClick={() => handleBreakTime(20)}>20s</button>
                            <button className='btn-break' onClick={() => handleBreakTime(30)}>30s</button>
                            <button className='btn-break' onClick={() => handleBreakTime(40)}>40s</button>
                        </div>
                    </div>
                    <div className="study-details">
                        <h2 className='title'>Study Details</h2>
                        <span className='study-time'>Study Time : {study} second</span>
                        <span className='study-time'>Break Time : {time} second</span>
                        <button className='activity-button' onClick={() => handleActivity()}>Activity Completed</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;