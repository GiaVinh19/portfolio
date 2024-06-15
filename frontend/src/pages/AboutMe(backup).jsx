import React, { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';

export default function AboutMe() {

    const [chosenClass, setChosenClass] = useState("");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        console.log(chosenClass);
    }, [chosenClass]); // This effect runs whenever chosenClass changes

    const handleMouseMove = useCallback(_.throttle((event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    }, 1000), []); // only update once every 10 milliseconds for better performancer

    function ClassComponent({ heroClass }) { // local component
        return (
            <div className={"class-component"} style={{ position: 'relative' }}>
                <img
                    className={`class-selection ${chosenClass == heroClass ? 'choosen' : 'unchoosen'} `}
                    onClick={() => setChosenClass(heroClass)}
                    src={`${heroClass}.png`}
                    onMouseMove={handleMouseMove}
                >
                </img>
                <span 
                    className={`tooltip ${chosenClass == heroClass ? 'choosen' : ''} `}
                    style={{
                        top: `${mousePosition.y + 20}px`,
                        left: `${mousePosition.x + 20}px`}}>
                tooltip
                </span>
            </div>
        )
    }

    return (
        <div className={"about-me"}>
            <ul className={"select-class"}>
                <li>Select Class</li>
            </ul>
            <div className={"class-container"}>
                <ClassComponent heroClass={"Vindicator"}></ClassComponent>
                <ClassComponent heroClass={"Venator"}></ClassComponent>
                <ClassComponent heroClass={"Visionary"}></ClassComponent>
            </div>
            <ul className={"arrows"}>
                <li>&larr;</li>
                <li>&rarr;</li>
            </ul>
        </div>
    )
}

