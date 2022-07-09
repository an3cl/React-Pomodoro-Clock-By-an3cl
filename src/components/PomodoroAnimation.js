import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const PomodoroAnimation = ({key, timer, animate, children}) => {
    return (
        <CountdownCircleTimer>
            {children,}
        </CountdownCircleTimer>
    )
}

export default PomodoroAnimation