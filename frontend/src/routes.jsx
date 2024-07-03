import Menu from "./pages/Menu";
import AboutMe from "./pages/AboutMe";
import ErrorPage from "./pages/ErrorPage";
import Options from "./pages/Options";
import Vindicator from "./pages/Vindicator";
import Venator from "./pages/Venator";
import Visionary from "./pages/Visionary";

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
        path: "about-me/Vindicator",
        element: <Vindicator></Vindicator>
    },
    {
        path: "about-me/Venator",
        element: <Venator></Venator>
    },
    {
        path: "about-me/Visionary",
        element: <Visionary></Visionary>
    },
    {
        path: "options",
        element: <Options></Options>
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
];

export default routes;