import { NavLink } from "react-router-dom"
import React, { useEffect, useState } from 'react';

export default function NavButton({ titleName, link }) {

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(pointer: coarse)');
        setIsTouchDevice(mediaQuery.matches);

        const handleMediaChange = (event) => {
            setIsTouchDevice(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    function playSelectAudio(audioFile) {
        const audio = new Audio(audioFile)
        audio.play()
    }

    return (
        <NavLink
            className={"nav-link"}
            to={link}
            onClick={() => playSelectAudio('/select-confirm.wav')}
            onMouseEnter={!isTouchDevice ? () => playSelectAudio('/select-hover.wav') : null}>
            {titleName}
        </NavLink>
    )
}