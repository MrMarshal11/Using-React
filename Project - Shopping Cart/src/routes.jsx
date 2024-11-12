import ErrorPage from "./ErrorPage";
import App from "../src/App";
import Shopping from "./Shopping";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'shopping',
        element: <Shopping />,
    },
]

export default routes;