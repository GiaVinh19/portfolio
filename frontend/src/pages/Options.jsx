import Slider from "../components/Slider";
import React, { useContext } from 'react';
import Context from '../Context';
import NavButton from "../components/NavButton";
import MusicSelector from "../components/MusicSelector";

export default function Options() {

    const { audio } = useContext(Context);
    const { setMusicFile ,musicVolume, setMusicVolume, sfxVolume, setSfxVolume } = audio;

    function onSetMusicVolume(event) {
        setMusicVolume(parseFloat(event.target.value));
    }

    function onSetSfxVolume(event) {
        setSfxVolume(parseFloat(event.target.value));
    }

    function playSoundOnChange() {
        const audio = new Audio("/audio/sfx/select-confirm.mp3");
        audio.volume = sfxVolume;
        audio.play();
    }

    function onSetMusicFile(event) {
        setMusicFile(event.target.value);
    }

    return (
        <div className={"options-menu"}>
            <ul className={"options-title"}>
                <li>Options</li>
            </ul>
            <ul className={"options-list"}>
                <MusicSelector onChange={onSetMusicFile}></MusicSelector>
                <Slider sliderType={"Music Volume"} initialVolume={musicVolume} value={musicVolume} onChange={onSetMusicVolume}></Slider>
                <Slider sliderType={"SFX Volume"} value={sfxVolume} onChange={onSetSfxVolume} onChangeUpdate={playSoundOnChange}></Slider>
            </ul>
            <ul className={"options-return"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}