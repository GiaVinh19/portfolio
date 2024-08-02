import Menu from "./pages/Menu";
import AboutMe from "./pages/AboutMe";
import ErrorPage from "./pages/ErrorPage";
import Options from "./pages/Options";
import Vindicator from "./pages/Vindicator";
import Venomancer from "./pages/Venomancer";
import Voidwalker from "./pages/Voidwalker";
import Profiles from "./pages/Profiles";

const routes = [
    {
        path: "/",
        element: <Menu></Menu>
    },
    {
        path: "/about-me",
        element: <AboutMe></AboutMe>
    },
    {
        path: "/about-me/Vindicator",
        element: <Vindicator></Vindicator>
    },
    {
        path: "/about-me/Venomancer",
        element: <Venomancer></Venomancer>
    },
    {
        path: "/about-me/Voidwalker",
        element: <Voidwalker></Voidwalker>
    },
    {
        path: "/profiles",
        element: <Profiles></Profiles>
    },
    {
        path: "/options",
        element: <Options></Options>
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
];

export default routes;