import React, {useState, useEffect } from "react";

function Timer({time, step, autostart}) {
    const [counter, setCounter] = useState(time)
    const [start, setStart] = useState(autostart);
    const interval = step/1000;
            
    useEffect(()=>{
        const timer = setTimeout(() =>{
            if(counter > 0 && start === true){
                setCounter(counter-interval)
        }}, step)
        return timer
    })
    return (
        <div className="timer-wrapper">
            <div className="buttons">
        <button  onClick={() =>{
            setStart(true);
            if(counter===0) {
                setCounter(time) 
            }
        }}><span className="text">Start</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span></button> 
        <button onClick={()=>{
            setStart(false)
        }}
        ><span className="text">Stop</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span></button>
        </div>
        <div className="time-info"> Countdown: {counter === 0 ? "Time over" : counter}</div>
    </div>
    )
}
export default Timer;