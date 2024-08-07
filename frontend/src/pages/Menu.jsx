// import React, { useState } from 'react';
import NavButton from '../components/NavButton';
import React, { useContext } from 'react';
import Context from '../Context';

export default function Menu() {
    const { menu, audio } = useContext(Context);
    const { menuOpen, setMenuOpen } = menu;
    const { playMusic, musicFile } = audio;

    function openMenuSelect() {
        playMusic();
        setMenuOpen(!menuOpen);
    };

    function getMusicTitle(musicFile) {
        const musicTitleWithExtension = musicFile.split('/').pop();
        const musicTitleWithoutExtension = musicTitleWithExtension.split('.').shift();
        const musicTitle = musicTitleWithoutExtension.replace('-',' ');
        if (musicTitle != "") { 
            return "Music - " + musicTitle;
        }
        else {
            return
        }
    }

    return (
        <>
            <div className={"main-menu"}>
                <ul className={`menu-info ${menuOpen ? 'open' : 'close'}`}>
                    <li>App ver. 1.0</li>
                    <li>{getMusicTitle(musicFile)}</li>
                </ul>
                <img className={"menu-title"} src="/image/Menu/menu-title.webp" />
                <div className={`menu-start ${menuOpen ? 'open' : 'close'}`}>
                    <p onClick={() => openMenuSelect()}>Click Here to Start</p>
                </div>
                <ul className={`menu-list ${menuOpen ? 'open' : 'close'}`}>
                    <NavButton link={"about-me"} titleName={"About Me"}></NavButton>
                    <NavButton link={"profiles"} titleName={"Profiles"}></NavButton>
                    <NavButton link={"options"} titleName={"Option"}></NavButton>
                    <NavButton titleName={"Credit"}></NavButton>
                </ul>
            </div>
        </>
    )
}