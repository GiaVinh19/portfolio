import CharacterSheet from "../components/CharacterSheet";

export default function Venator({}) {
    const skillText = {
        "" : "The Generalist of Vinh's Vanguard. As the artisan of all trades, Venator adapts and overcomes challenges by his study of the human psyche and versatility in Audacity, Godot, Krita, and Capcut.",
        "krita": "An artisan tool to illustrate one's goals. But in the hands of Venator, it becomes a branding mark for his prey.",
        "capcut": "Venator's infamous hook that captures his victim's last moments before delivering the final cut.",
        "godot": "A strategem of Venator acted as tactic simulator, a means to foresee the endless possibilities of a hunter's wicked imagination.",
        "audacity" : "Venator's boldness from perfecting his sense of hearing, allows him to confidently analyze his target's sound of movements, breathing, and heartbeat before striking fear into his prey."
    }

    const skillName = {
        "" : "",
        "krita" : "Krita",
        "capcut" : "Capcut",
        "godot" : "Godot",
        "audacity" : "Audacity"
    }

    return (
        <CharacterSheet 
        heroClass={"Venator"} 
        skillName={skillName}
        skillText={skillText}
        skill01={"audacity"}
        skill02={"godot"}
        skill03={"krita"}
        skill04={"capcut"}
        >
        </CharacterSheet>
    )
}