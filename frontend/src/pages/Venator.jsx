import CharacterSheet from "../components/CharacterSheet";

export default function Venator({}) {
    const skillText = {
        "" : "Venator",
        "krita": "An artisan tool to illustrate one's goals. But in the hands of Venator, it becomes a branding mark for his prey.",
        "capcut": "Venator's infamous hook that capture his victim's last moments before making the final cut.",
        "godot": "A strategem of Venator acted as tatical simulator, a means to foresee the endless possible outcomes of a hunter's wicked imagination.",
        "audacity" : "Venator's boldness from perfecting his sense of hearing, allowing him to confidently analyze his target's sound of movements, breathing, and heartbeat before striking fear into his prey."
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
        skill01={"krita"}
        skill02={"capcut"}
        skill03={"audacity"}
        skill04={"godot"}
        >
        </CharacterSheet>
    )
}