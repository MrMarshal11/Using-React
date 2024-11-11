import { Link } from "react-router-dom";

function Profile() {
    return (
        <div>
            <h2>This is the profile page!</h2>
            <img src="/vite.svg"></img>
            <Link to="/">Return back to main menu here</Link>
        </div>
    )
}

export default Profile;