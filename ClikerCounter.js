import React, { useRef } from 'react';
import './ClikerCounter.css';

const ClickerCounter = () => {
    const countRef = useRef(0);
    const displayRef = useRef(null);

    const handleClick = () => {
        countRef.current += 1;
        displayRef.current.innerText = countRef.current;
    }
    const negaClick = () => {
        countRef.current -= 1;
        displayRef.current.innerText = countRef.current;
    }

    return (
        <div>
            <p>Clicks: <span ref={displayRef}>0</span></p>
            <button onClick={handleClick}>+</button>
            <button onClick={negaClick}>-</button>
        </div>
    );
}

export default ClickerCounter;