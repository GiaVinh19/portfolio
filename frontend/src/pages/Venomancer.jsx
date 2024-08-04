import CharacterSheet from "../components/CharacterSheet";

export default function Venomancer() {
    const skillText = {
        "" : "The Backend of Vinh's Vanguard. As the mastermind of the operation, Venomancer lurks in the shadow and secretly deals data per session with the specialization of Python, Flask, SQL-Alchemy, and CRUD.",
        "python": "Python — Venomancer's trusty snake that provide the necessary poisons to concoct the perfect brews for the perfect timing.",
        "flask": "Flask — A vessel to hold the essential ingredients, akin to libraries, dependencies, and configurations of backend arsenal.",
        "sql-alchemy": "Schematic of Quintessential Lexicon in Alchemy — A mapping tool to interact various tables of ingredients",
        "crud" : "Craft, Render, Utilize, and Dissolve — The alchemical prowess to masterfully manipulate data into any shape and form."
    };

    return (
        <CharacterSheet 
        heroClass={"Venomancer"} 
        skillText={skillText}
        skill01={"python"}
        skill02={"flask"}
        skill03={"sql-alchemy"}
        skill04={"crud"}
        >
        </CharacterSheet>
    )
}