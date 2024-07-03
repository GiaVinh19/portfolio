import { NavLink } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className={"error-page"}>
            <h1>Hark! A Misadventure Hath Befallen Thee.</h1>
            <p>Thou hast ventured into the forbidden land where thou dost not belong.</p>
            <p>The path thou seekest is hidden in shadows, or mayhap it ne'er existed.</p>
            <p>Fret not, noble adventurer!</p>
            <p>Light thy bonfire to travel homeward</p>
            <p>May fortune favor thee, and thy journey lead safely.</p>
            <NavLink className={"bonfire"} to="/">
                <img src={"bonfire.gif"} />
            </NavLink>
        </div>
    )
}