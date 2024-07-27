import NavButton from "./NavButton"
import React, { useEffect, useState } from 'react';
import SkillButton from "./SkillButton";

export default function CharacterSheet({ heroClass, skill01, skill02, skill03, skill04, skillText }) {

    const [chosenSkill, setChosenSkill] = useState("");

    function onSetChosenSkill(skill, sfxVolume) {
        setChosenSkill(skill);
        if (skill != "") {
            const audio = new Audio(`/audio/sfx/${skill}.mp3`);
            audio.volume = Math.max(sfxVolume - 0.2, 0)
            audio.play()
        }
    }

    useEffect(() => {
        console.log(chosenSkill);
    }, [chosenSkill]); // This effect runs whenever chosenSkill changes

    return (
        <div className={"character-sheet"}>
            <span>{heroClass}</span>
            <div className={"character-section"}>
                <div className={"character-visual"}>
                    <video
                        className="character-portrait"
                        draggable="false"
                        src={`/image/${heroClass}/${chosenSkill}.webm`}
                        autoPlay
                        preload="auto"
                        loop
                        muted>
                    </video>
                </div>
                <div className={"character-info"}>
                    <div className={"skill-text"}>
                        <span>{skillText[chosenSkill]}</span>
                    </div>
                    <div className={"skill-icon"}>
                        <SkillButton skillNumber={skill01} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></SkillButton>
                        <SkillButton skillNumber={skill02} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></SkillButton>
                        <SkillButton skillNumber={skill03} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></SkillButton>
                        <SkillButton skillNumber={skill04} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></SkillButton>
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