export default function ClassComponent({ heroClass, chosenClass, onSetChosenClass, classDescription }) {
    return (
        <div className={"class-component"}>
            <div className={"context-container"}>
                <img 
                    className={"context-image"}
                    src = {"context.png"}>
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
                className={`class-image ${chosenClass === heroClass ? 'choosen' : 'unchoosen'} `}
                onClick={chosenClass === heroClass ? () => {} : () => onSetChosenClass(heroClass)}
                src={`${heroClass}.png`}>
            </img>
        </div>
    )
}