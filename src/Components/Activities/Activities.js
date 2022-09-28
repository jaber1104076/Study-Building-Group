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
                        <h5>Abdullah Al Jaber</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;