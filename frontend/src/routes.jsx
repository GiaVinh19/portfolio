import Menu from "./pages/Menu";
import AboutMe from "./pages/AboutMe";
import ErrorPage from "./pages/ErrorPage";
import CharacterSheet from "./pages/CharacterSheet";

const routes = [
    {
        path: "/",
        element: <Menu></Menu>
    },
    {
        path: "about-me",
        element: <AboutMe></AboutMe>
    },
    {
        path: "character-sheet",
        element: <CharacterSheet></CharacterSheet>
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
];

export default routes;