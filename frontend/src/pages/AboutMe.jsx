import ClassSelection from "../components/ClassSelection";

export default function AboutMe() {
    return (
        <div className={"about-me"}>
            <ul className={"select-class"}>
                <li>Select Class</li>
            </ul>
            <div className={"class-container"}>
                <ClassSelection fileName={"Vindicator.png"} ></ClassSelection>
                <ClassSelection fileName={"Venator.png"}></ClassSelection>
                <ClassSelection fileName={"Visionary.png"}></ClassSelection>
            </div>
            <ul className={"arrows"}>
                <li>&larr;</li>
                <li>&rarr;</li>
            </ul>
        </div>
    )
}