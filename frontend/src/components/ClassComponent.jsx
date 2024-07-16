import Context from '../Context';
import React, { useContext } from 'react';

export default function ClassComponent({ heroClass, chosenClass, onSetChosenClass, classDescription }) {

    const { audio } = useContext(Context);
    const { sfxVolume } = audio;

    return (
        <div className={"class-component"}>
            <div className={"context-container"}>
                <img 
                    className={"context-image"}
                    src = {"/image/context.png"}>
                </img>
                <div className={"context-box"}>
                    {`${classDescription[heroClass]}`}
                </div>
            </div>
            <span className={"class-title"}>
                {`${heroClass}`}
            </span>
            <img
                draggable={"false"}
                className={`class-image ${chosenClass === heroClass ? 'chosen' : 'unchosen'} `}
                onClick={chosenClass === heroClass ? () => {} : () => onSetChosenClass(heroClass, sfxVolume)}
                src={`/image/${heroClass}.png`}>
            </img>
        </div>
    )
}