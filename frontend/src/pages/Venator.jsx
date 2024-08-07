import CharacterSheet from "../components/CharacterSheet";

export default function Venator({}) {
    const skillText = {
        "krita": "Krita — An artisan tool to illustrate one's goal. But in the hand of Venator, it becomes a branding mark for his prey.",
        "capcut": "Capcut — Venator's infamous hook that capture his victim's last moment before masterfully stroke his cut.",
        "godot": "Godot - A strategem that acts as a simulator for Venator, a mean to foreseen the endless outcomes of a hunter's wicked creativity.",
        "audacity" : "Audacity - Venator's source of strength to overcome any big games."
    }

    return (
        <CharacterSheet 
        heroClass={"Venator"} 
        skillText={skillText}
        skill01={"krita"}
        skill02={"capcut"}
        skill03={"audacity"}
        skill04={"godot"}
        >
        </CharacterSheet>
    )
}