import Menu from "./pages/Menu";
import AboutMe from "./pages/AboutMe";
import ErrorPage from "./pages/ErrorPage";

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
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
];

export default routes;