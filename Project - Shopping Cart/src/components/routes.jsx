import ErrorPage from "./ErrorPage";
import App from "./App";
import ShoppingLayout from "./ShoppingLayout";
import Homepage from "./Homepage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {path: 'home', element: <Homepage />},
            {path: 'shopping', element: <ShoppingLayout />},
        ]
    },
]

export default routes;