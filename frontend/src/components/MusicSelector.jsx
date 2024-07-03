export default function MusicSelector({ onChange }) {

    return (
        <div className={"music-container"}>
            <span>
                Music
            </span>
            <select className={"music"} onChange={onChange}>
                <option value="Dark-Souls.wav">Dark Souls</option>
                <option value="Dark-Reality.wav">Dark Reality</option>
            </select>
        </div>
    )
}