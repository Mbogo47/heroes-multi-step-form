import Steps from "./Steps"
import { Link } from "react-router-dom"
import '../styles/sidebar.css'

function Sidebar() {


    return (
        <div className="sidebar">
            <Steps number={1} step="Step 1" info="Your Info" />
            <Steps number={2} step="Step 2" info="Select Plan" />
            <Steps number={3} step="Step 3" info="Add-ons" />
            <Steps number={4} step="Step 4" info="Summary" />
        </div>
    )
}

export default Sidebar