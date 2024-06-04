import { NavLink } from "react-router-dom"

export default function MenuList({ titleName, link }) {

    function playSelectAudio(audioFile) {
        const audio = new Audio(audioFile)
        audio.play()
    }

    return (
        <NavLink
            className={"nav-link"}
            to={link} 
            onClick={() => playSelectAudio('/select-confirm.wav')}
            onMouseEnter={() => playSelectAudio('/select-hover.wav')}>
            {titleName}
        </NavLink>
    )
}