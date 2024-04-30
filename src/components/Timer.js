import React, { useState, useEffect } from "react";

export function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        let intervalId;

        if (isActive && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isActive, seconds]);

    const handleStart = (e) => {
        if (e.key === "Enter") {
            setSeconds(parseInt(inputValue, 10) * 60);
            setIsActive(true);
            setInputValue('')
        }
    };

    const handleReset = () => {
        setSeconds(0);
        setIsActive(false);
        setInputValue('');
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <input
                className="timerInput"
                type="number"
                placeholder="Введите количество минут"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleStart}
            />
            <h1>{!seconds ? 'Готово' : formatTime(seconds)}</h1>
            <button className="resetButton" onClick={handleReset}>Сбросить</button>
        </div>
    );
}