import ClassComponent from "../components/ClassComponent"
import React, { useEffect, useState, useContext } from 'react';
import NavButton from "../components/NavButton";
import Context from "../Context";

export default function AboutMe() {

    const Frontend = "The Frontend of Vinh's Vanguard. As the initiator of the campaign, Vindicator plans and visualizes his victory through the mastery of HTML, CSS, JS, and React."
    const Backend = "The Backend of Vinh's Vanguard. As the mastermind of the operation, Venomancer lurks in the shadow and secretly deals data per session with the specialization of Python, Flask, SQL-Alchemy, and CRUD"
    const Support = "The Support of Vinh's Vanguard. A mysterious figure claims to wield the power of foresight, Venator hold knowledges that is unknown to many. Krita - a brush that conceptualize the future into an abstract but yet comprehensible painting; Audacity - an eerie conch that allow the dead to vocalize into whispers; Godot - A magical crystal ball that bind all his visions into a simulation where the future becomes a reality"

    const classDescription = {"Vindicator" : Frontend, "Venomancer" : Backend, "Venator" : Support};

    const [chosenClass, setChosenClass] = useState("");

    const { audio } = useContext(Context);
    const {setVoiceFile} = audio;

    function onSetChosenClass(heroClass, sfxVolume, setVoiceFile) {
        setVoiceFile(`/audio/voice/${heroClass}.mp3`)
        setChosenClass(heroClass);

        // const audio = new Audio(`/audio/sfx/${heroClass}/${heroClass}.mp3`);
        // audio.volume = sfxVolume;
        // audio.play();
        
    }

    useEffect(() => {
        console.log(chosenClass);
    }, [chosenClass]); // This effect runs whenever chosenClass changes

    return (
        <div className={"about-me"}>
            <ul className={"select-class"}>
                <li>About Me</li>
            </ul>

            <div className={"class-container"}>
                <ClassComponent
                    heroClass={"Vindicator"}
                    chosenClass={chosenClass}
                    onSetChosenClass={onSetChosenClass}
                    classDescription={classDescription}>
                </ClassComponent>

                <ClassComponent
                    heroClass={"Venomancer"}
                    chosenClass={chosenClass}
                    onSetChosenClass={onSetChosenClass}
                    classDescription={classDescription}>
                </ClassComponent>

                <ClassComponent
                    heroClass={"Venator"}
                    chosenClass={chosenClass}
                    onSetChosenClass={onSetChosenClass}
                    classDescription={classDescription}>
                </ClassComponent>
            </div>

            <ul className={"arrows"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <NavButton titleName={"Character Sheet ▶"} link={chosenClass}></NavButton>
            </ul>
        </div>
    )
}

