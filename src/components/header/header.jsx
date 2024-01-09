import { Link } from "react-router-dom"
import './header.css'
import Hero from "../hero/hero"
function Header(){
    return(
        <section className="hwrapper">
            <div className="flexCenter paddings innerWidth hcontainer">
                <img src={require("./logo.png")} alt="logo" width={100} />
                <div className="flexCenter hmenu">
                    <a to="/">Residencies</a>
                    <a to="/">Our Values</a>
                    <a to="/">Contact Us</a>
                    <a to="/">Get Started</a>
                    <button className="button">
                        <a to="/">Contact</a>
                    </button>
                </div>
            </div>
            
        </section>
    )
}
export default Header