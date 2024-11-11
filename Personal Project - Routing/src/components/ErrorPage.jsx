import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <div>
            <h2>Whoops you made a mistake!</h2>
            <Link to="/">Return to main menu here</Link>
        </div>
    )
}

export default ErrorPage;