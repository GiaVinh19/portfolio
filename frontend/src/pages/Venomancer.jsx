import CharacterSheet from "../components/CharacterSheet";

export default function Venomancer() {
    const skillText = {
        "" : "The Backend of Vinh's Vanguard. As the mastermind of the operation, Venomancer delves in the shadow and secretly deals data per second with the specialization of Python, Flask, SQL-Alchemy, and CRUD.",
        "python": "Python - Venomancer's trusty snake that provide the necessary poisons to concote the perfect brews for the perfect timing.",
        "flask": "Flask - A vessel to hold the essential ingredients—akin to libraries, dependencies, and configurations of backend arsenal.",
        "sql-alchemy": "SQLAlchemy allows the Venomancer to craft intricate queries and perform complex data manipulations with ease, transforming raw data into powerful insights. Much like an alchemist turns base materials into gold, SQLAlchemy enables the Venomancer to refine and harness data for optimal backend solutions.",
        "crud" : "Craft, Render, Utilize, and Dissolve - Endowed with the Mighty Lord's sacred knowledge, this holy text blesses Vindicator and his allies the essential foundation for any digital crusade."
    };

    return (
        <CharacterSheet 
        heroClass={"Venomancer"} 
        skillText={skillText}
        skill01={"holy-text-of-mighty-lord"}
        skill02={"crusader-sacred-smite"}
        skill03={"jouster-strike"}
        skill04={"react"}
        >
        </CharacterSheet>
    )
}