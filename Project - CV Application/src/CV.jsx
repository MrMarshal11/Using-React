import './CV.css'

function CV({fullName, email, phoneNumber}) {
    return (
        <div>
            <div className="matchPairs">
                <h2>Name: </h2><h2>{fullName}</h2>
            </div>
            <div className="matchPairs">
                <h2>Email: </h2><h2>{email}</h2>
            </div>
            <div className="matchPairs">
                <h2>Phone Number: </h2><h2>{phoneNumber}</h2>
            </div>
        </div>
    )
}

export default CV;