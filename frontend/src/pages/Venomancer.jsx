import CharacterSheet from "../components/CharacterSheet";

export default function Venomancer() {
    const skillText = {
        "" : "The Backend of Vinh's Vanguard. As the mastermind of the operation, Venomancer lurks in the shadow and secretly deals data per session with the specialization of Python, Flask, SQL-Alchemy, and CRUD.",
        "python": "Python — Venomancer's loyal pet that provide the foundation ingredients for any alchemist",
        "flask": "Flask — A vessel to hold the essential ingredients, akin to libraries, dependencies, and configurations of backend arsenal.",
        "sql-alchemy": "Schematic of Quintessential Lexicon in Alchemy — A mapping tool to illustrate the relationship and interaction among various tables of ingredients",
        "crud" : "Craft, Render, Utilize, and Dissolve — The alchemical prowess to masterfully manipulate ingredients into any shape and form."
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