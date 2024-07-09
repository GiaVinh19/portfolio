export default function MusicSelector({ onChange }) {

    return (
        <div className={"music-container"}>
            <span>
                Music
            </span>
            <select className={"music"} onChange={onChange}>
                <option value="/audio/music/Dark-Souls.mp3">Dark Souls</option>
                <option value="/audio/music/Dark-Reality.mp3">Dark Reality</option>
                <option value="/audio/music/Dark-Wood.mp3">Dark Wood</option>
            </select>
        </div>
    )
}