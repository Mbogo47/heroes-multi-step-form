import { BrowserRouter, Route, Routes } from "react-router-dom"
import Info from "../pages/Info"
import Plan from "../pages/Plan"
import Add_ons from "../pages/Add-ons"
import Summary from "../pages/Summary"
import Thanks from "../pages/Thanks"
import Yearly from "../pages/Yearly"

const Mainpage = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Info />} />
                    <Route path='/plan' element={<Plan />} />
                    <Route path='/add-ons' element={<Add_ons />} />
                    <Route path='/summary' element={<Summary />} />
                    <Route path='/thanks' element={<Thanks />} />
                    <Route path='/yearly' element={<Yearly />}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Mainpage