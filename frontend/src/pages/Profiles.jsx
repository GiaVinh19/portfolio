import NavButton from '../components/NavButton';
import LinkButton from '../components/LinkButton';
import { useEffect, useState } from 'react';

export default function Profiles() {

    const [chosenProfile, setChosenProfile] = useState("");

    function onSetChosenProfile(profile, setVoiceFile) {
        setVoiceFile(`/audio/voice/Profiles/${profile}.mp3`)
        setChosenProfile(profile);
    }

    return (
        <div className={"profiles"}>
            <span> Profiles </span>
            <div className={"map-section"}>
                <img
                    className={"map"}
                    src={"/image/Profiles/map.webp"}>
                </img>
                <LinkButton profile={"itch"} chosenProfile={chosenProfile} top={"65%"} left={"58%"} onSetChosenProfile={onSetChosenProfile}></LinkButton>
                <LinkButton profile={"linkedin"} chosenProfile={chosenProfile} top={"78%"} left={"65%"} onSetChosenProfile={onSetChosenProfile}></LinkButton>
                <LinkButton profile={"medium"} chosenProfile={chosenProfile} top = {"46%"} left={"46.5%"} onSetChosenProfile={onSetChosenProfile}></LinkButton>
                <LinkButton profile={"github"} chosenProfile={chosenProfile} top = {"31%"} left={"58.5%"} onSetChosenProfile={onSetChosenProfile}></LinkButton>
            </div>
            <ul className={"profiles-return"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}