import NavButton from '../components/NavButton';

export default function Profiles() {
    return (
        <div className={"profiles"}>
            <span> Profiles </span>
            <div className={"map-section"}>
                <img
                    className={"map"}
                    src={"/image/Profiles/map.webp"}>
                </img>
            </div>
            <ul className={"profiles-return"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}