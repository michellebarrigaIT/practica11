import InfoButton from "../InfoButton/InfoButton"
import SuccessButton from "../SuccessButton/SuccessButton"
import "./Navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
        <h2>Navbar</h2>
        <div className="btn-container">
            <SuccessButton />
            <InfoButton />
        </div>
    </div>
  )
}

export default Navbar