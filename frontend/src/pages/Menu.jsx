// import React, { useState } from 'react';
import NavButton from '../components/NavButton';
import React, { useContext } from 'react';
import Context from '../Context';

export default function Menu() {
    const { menu, audio } = useContext(Context);
    const { menuOpen, setMenuOpen } = menu;
    const { playMusic } = audio;

    function openMenuSelect() {
        playMusic();
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={"main-menu"}>
                <ul className={"menu-info"}>
                    <li>App ver. 1.0</li>
                </ul>
                <img className={"menu-title"} src="/image/menu-title.png" />
                <div className={`menu-start ${menuOpen ? 'open' : 'close'}`}>
                    <p onClick={() => openMenuSelect()}>Click Here to Start</p>
                </div>
                <ul className={`menu-list ${menuOpen ? 'open' : 'close'}`}>
                    <NavButton link={"about-me"} titleName={"About Me"}></NavButton>
                    <NavButton titleName={"Load Profile"}></NavButton>
                    <NavButton link={"options"} titleName={"Option"}></NavButton>
                    <NavButton titleName={"Credit"}></NavButton>
                </ul>
            </div>
        </>
    )
}