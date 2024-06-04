import React, { useState } from 'react';
import MenuList from '../components/MenuList';

export default function Menu() {

    const [menuOpen, setMenuOpen] = useState(false);

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
                    <p onClick={() => openMenuSelect()}>Click to Start</p>
                </div>
                <ul className={`menu-list ${menuOpen ? 'open' : 'close'}`}>
                    <MenuList link={"about-me"} titleName={"About Me"}></MenuList>
                    <MenuList titleName={"Load Profile"}></MenuList>
                    <MenuList titleName={"Option"}></MenuList>
                    <MenuList titleName={"Credit"}></MenuList>
                </ul>
            </div>
        </>
    )
}