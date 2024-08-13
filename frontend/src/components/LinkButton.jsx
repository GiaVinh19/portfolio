export default function LinkButton( {imageFile, top, left} ) {
    return (
    <img 
        className={"link-button"} 
        src={`/image/Profiles/${imageFile}.webp`}
        style={{
            top : top,
            left : left
        }}
        >
    </img>
    )
}