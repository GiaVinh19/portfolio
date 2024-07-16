import NavButton from "./NavButton"
import Context from "../Context";
import React, { useEffect, useState, useContext } from 'react';
import Skill from "./Skill";

export default function CharacterSheet( { heroClass, skill01, skill02, skill03, skill04 } ) {
    
    const [chosenSkill, setChosenSkill] = useState("");
    const { audio } = useContext(Context);
    const { sfxVolume } = audio;

    function onSetChosenSkill(skill, sfxVolume) {
        setChosenSkill(skill);
        const audio = new Audio(`/audio/sfx/${skill}.mp3`);
        audio.volume = (sfxVolume - 0.2)
        audio.play()
    }

    useEffect(() => {
        console.log(chosenSkill);
    }, [chosenSkill]); // This effect runs whenever chosenSkill changes
    
    return (
        <div className={"character-sheet"}>
            <span>{heroClass}</span>
                <div className={"character-section"}>
                    <div className={"character-visual"}>
                        <img 
                            className={"character-portrait"}
                            draggable={"false"}
                            src={`/image/${heroClass}${chosenSkill}.gif`}>
                        </img>
                    </div>
                    <div className={"character-info"}>
                        <div className={"skill-text"}>
                            <span>insert skill text here</span>
                        </div>
                        <div className={"skill-icon"}>
                            <Skill skillNumber={skill01} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></Skill>
                            <Skill skillNumber={skill02} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></Skill>
                            <Skill skillNumber={skill03} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></Skill>
                            <Skill skillNumber={skill04} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></Skill>
                        </div>
                    </div>
                </div>
            <ul className={"character-return"}>
                <NavButton titleName={"◀ About Me"} link={"/about-me"}></NavButton>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}