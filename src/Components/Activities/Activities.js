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
    //const { id } = goals;
    const handleBreakTime = (time) => {
        setTime(time);
        //setBrTime();
        const brTime = {
            time
        }
        //console.log(time);
        const getTime = localStorage.getItem("Time")
        const timeValue = JSON.parse(getTime)
        if (timeValue) {
            localStorage.setItem("Time", JSON.stringify([...timeValue, brTime],))
        }
        else {
            localStorage.setItem("Time", JSON.stringify([brTime]))
        }
    }

    useEffect(() => {
        const localStorageData = localStorage.getItem("Time")
        console.log(localStorageData)
    }, [])

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
                <div className="list-conatiner">
                    <div className='profile'>
                        <img src={jaber} alt="" />
                        <h5 className='title'>Abdullah Al Jaber</h5>
                    </div>
                    <div className="info">
                        <div className='my-info'>
                            <h4>70kg</h4>
                            <p>Weight</p>
                        </div>
                        <div className='my-info'>
                            <h4>5.5'</h4>
                            <p>Height</p>
                        </div>
                        <div className='my-info'>
                            <h4>28years</h4>
                            <p>Age</p>
                        </div>
                    </div>
                    <div className="break-info">
                        <h2 className='title'>Add a break</h2>
                        <div className="break-button">
                            <button className='btn-break' onClick={() => handleBreakTime(10)}>10m</button>
                            <button className='btn-break' onClick={() => handleBreakTime(20)}>20m</button>
                            <button className='btn-break' onClick={() => handleBreakTime(30)}>30m</button>
                            <button className='btn-break' onClick={() => handleBreakTime(40)}>40m</button>
                        </div>
                    </div>
                    <div className="study-details">
                        <h2 className='title'>Study Details</h2>
                        <span className='study-time'>Study Time : {study} m</span>
                        <span className='study-time'>Break Time : {time} m</span>
                        <button className='activity-button' onClick={() => handleActivity()}>Activity Completed</button>
                    </div>
                </div>

            </div>
            <div>
                <h1 className='question-title'>Important Question and Answer About React</h1>
                <div className='ans-cart'>
                    <h2>1. How does react work?</h2>
                    <p>React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
                </div>
                <div className='ans-cart'>
                    <h2>2. What are the difference between Props and State?</h2>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>
                <div className='ans-cart'>
                    <h2>3. What does useEffect use except data load?</h2>
                    <p>useEffect is a basic hook that gets triggered on a combination of 3 React component lifecycles: componentDidMount. componentDid.</p>
                </div>
            </div>
        </div>
    );
};

export default Activities;