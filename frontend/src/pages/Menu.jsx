// import React, { useState } from 'react';
import NavButton from '../components/NavButton';
import React, { useContext } from 'react';
import Context from '../Context';

export default function Menu() {

    const { menuOpen, setMenuOpen } = useContext(Context);

    function playAudio(audioFile) {
        const audio = new Audio(audioFile)
        audio.play()
    }

    function openMenuSelect() {
        playAudio("/select-confirm.wav");
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={"main-menu"}>
                <ul className={"menu-info"}>
                    <li>App ver. 1.0</li>
                </ul>
                <img className={"menu-title"} src="menu-title.png" />
                <div className={`menu-start ${menuOpen ? 'open' : 'close'}`}>
                    <p onClick={() => openMenuSelect()}>Click Here to Start</p>
                </div>
                <ul className={`menu-list ${menuOpen ? 'open' : 'close'}`}>
                    <NavButton link={"about-me"} titleName={"About Me"}></NavButton>
                    <NavButton titleName={"Load Profile"}></NavButton>
                    <NavButton titleName={"Option"}></NavButton>
                    <NavButton titleName={"Credit"}></NavButton>
                </ul>
            </div>
        </>
    )
}