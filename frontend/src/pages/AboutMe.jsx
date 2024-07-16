import ClassComponent from "../components/ClassComponent"
import React, { useEffect, useState } from 'react';
import NavButton from "../components/NavButton";

export default function AboutMe() {

    const Frontend = "The Frontend of Vinh's Vanguard. As the initiator of the operation, Vindicator plans and visualizes his victory through the mastery of these perks. JS - also know as Jouster Strike, the ability to retaliate any incoming attacks. CSS - also know as Crusader's Sacred Smite, the ability to stun his foes with his dazzling sword; React - allows Vindicator bravely interface in the blink of an eye; Vite - to lightens his team's morale and burdens."
    const Backend = "The Backend of Vinh's Vanguard. While Vindicator is the star of the show, Venator hides in the shadow and secretely deals heavy data. As such, Venator specialize in concoction with these perks. Python - Venator's trusty snake that allows him to brew anything at his disposal; Flask - a tool that hold Python's concoction to build up data over time in short notice; SQL-Alchemy - an alchemist's book to simplify Flask's recipe for an easier approach"
    const Support = "The Support of Vinh's Vanguard. An mysterious figure claims to wield the power of foresight, Visionary hold knowledges that is unknown to many. Krita - a brush that conceptualize the future into an abstract but yet comprehensible painting; Audacity - an eerie conch that allow the dead to vocalize into whispers; Godot - A magical crystal ball that bind all his visions into a simulation where the future becomes a reality"

    const classDescription = {"Vindicator" : Frontend, "Venator" : Backend, "Visionary" : Support};

    const [chosenClass, setChosenClass] = useState("");


    function onSetChosenClass(heroClass, sfxVolume) {
        setChosenClass(heroClass);
        const audio = new Audio(`/audio/sfx/${heroClass}.mp3`);
        audio.volume = sfxVolume;
        audio.play();
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
                    heroClass={"Venator"}
                    chosenClass={chosenClass}
                    onSetChosenClass={onSetChosenClass}
                    classDescription={classDescription}>
                </ClassComponent>

                <ClassComponent
                    heroClass={"Visionary"}
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

