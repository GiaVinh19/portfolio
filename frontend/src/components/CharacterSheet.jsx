import NavButton from "./NavButton"

export default function CharacterSheet( { heroClass } ) {
    return (
        <div className={"character-sheet"}>
            <span>{heroClass}</span>
                <div className={"character-section"}>
                    <div className={"character-info"}>
                        <p>
                            Ogga Booga
                        </p>
                    </div>
                    <div className={"character-visual"}>
                        <img 
                            className={"character-portrait"}
                            draggable={"false"}
                            src={`/image/${heroClass}.png`}>
                        </img>
                    </div>
                    </div>
            <ul className={"character-return"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}