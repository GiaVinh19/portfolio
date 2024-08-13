import NavButton from '../components/NavButton';
import LinkButton from '../components/LinkButton';
import { useEffect, useState } from 'react';

export default function Profiles() {

    const [chosenProfile, setChosenProfile] = useState("");

    return (
        <div className={"profiles"}>
            <span> Profiles </span>
            <div className={"map-section"}>
                <img
                    className={"map"}
                    src={"/image/Profiles/map.webp"}>
                </img>
                <LinkButton imageFile={"itch"} top={"65%"} left={"58%"}></LinkButton>
                <LinkButton imageFile={"linkedin"} top={"50%"} left={"67.5%"}></LinkButton>
                <LinkButton imageFile={"medium"} top = {"46%"} left={"46.5%"}></LinkButton>
                <LinkButton imageFile={"github"} top = {"31%"} left={"58.5%"}></LinkButton>
            </div>
            <ul className={"profiles-return"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}