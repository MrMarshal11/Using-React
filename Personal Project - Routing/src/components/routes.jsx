import Settings from "./Settings";
import ErrorPage from "./ErrorPage";
import Profile from "./Profile";
import App from "./App";

const routes = [
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/settings",
        element: <Settings />,
    },
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
]

export default routes;