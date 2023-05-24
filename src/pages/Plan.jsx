import Selectplan from "../components/Selectplan"
import iconadvanced from "../assets/images/icon-advanced.svg"
import iconarcade from "../assets/images/icon-arcade.svg"
import iconpro from "../assets/images/icon-pro.svg"
import '../styles/plan.css'
import { Link } from "react-router-dom"
import { RxSwitch } from 'react-icons/rx'
function Plan() {
    return (
        <div className="plan-container">
            <div className="plan-header">
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="plan-content">
                <Selectplan image={< img src={iconarcade} alt="" />} name="Arcade" plan="$90/yr"  duration="2 months free"/>
                <Selectplan image={< img src={iconadvanced} alt="" />} name="Advanced" plan="$120/yr" duration="2 months free"/>
                <Selectplan image={< img src={iconpro} alt="" />} name="Pro" plan="$150/yr" duration="2 months free" />

            </div>
            <div className="plan-subscription">
                <span className="plan-subscription-months">monthly</span>
                <span className="icon"><RxSwitch /></span>
                <span>yearly</span>
            </div>
            <div className="buttons">
                <Link to={'/'}><button className="back">Go back</button></Link>
                <Link to={'/add-ons'}><button className="next">Next Step</button></Link>
            </div>


        </div>

    )
}

export default Plan