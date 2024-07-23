import CharacterSheet from "../components/CharacterSheet";

export default function Vindicator() {
    const skillText = {
        "" : "The Frontend of Vinh's Vanguard. As the initiator of the operation, Vindicator plans and visualizes his victory through the mastery of HTML, CSS, Javascript, and React.",
        "crusader-sacred-smite": "Crusader Sacred Smite (CSS) - Deploy stunning visual effects that captivate and mesmerize all who behold them, rendering adversaries awestruck.",
        "jouster-strike": "Jouster Strike (JS) - A knight's masterful technique to swiftly respond with intricate algorithms, executing commands with the speed and precision of a jousting blade.",
        "react": "React - Empowers Vindicator to protect his allies with lightning-fast responses, heroically overcoming any obstacle in their path.",
        "holy-text-of-mighty-lord" : "Holy Text of Mighty Lord (HTML) - Endowed with the Mighty Lord's sacred knowledge, this holy text blesses Vindicator and his allies the essential foundation for any digital crusade."
    };

    return (
        <CharacterSheet 
        heroClass={"Vindicator"} 
        skillText={skillText}
        skill01={"holy-text-of-mighty-lord"}
        skill02={"crusader-sacred-smite"}
        skill03={"jouster-strike"}
        skill04={"react"}
        >
        </CharacterSheet>
    )
}