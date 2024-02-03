import { Link } from "react-router-dom";
import './footer.css';
import logo_vertical from '../../assets/logo_vertical.png';
import logo from '../../assets/Logo.svg';
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";




function Footer(){
    return (<footer className="footer padding-sides" data-testid={"footer"}>
        <div className="footer-logos"> 
            <img className="logo-vertical" src={logo_vertical} alt="logo"></img>
            <img className="logo-horizontal" src={logo} alt="logo"></img>
        </div>
        <div className="footer-nav">
            <ul>
                <li className=''><Link to="/" >Home</Link></li>
                <li className=''> <Link to="/about">About</Link></li> 
                <li className=''> <Link to='/menu'>Menu</Link></li>
                <li className=''> <Link to="/reservations">Reservations</Link></li>
                <li className=''> <Link to="/order-online">Order Online</Link></li>
                <li className=''> <Link to="/login">Login</Link></li>
            </ul>
        </div>
        <div className="footer-contact">
            <ul>
                <li>Address: Chicago </li>
                <li>Phone Number: + 353 83054278 </li>
                <li>Email: fredsys@outlook.com</li>
            </ul>
        </div>
        <div className="footer-social">
            <ul>
                <li><TiSocialTwitter size={27}/></li>
                <li> <SlSocialFacebook size={27}/></li>
                <li><SlSocialInstagram size={27}/></li>
                <li> <TiSocialYoutube size={27}/></li>
            </ul>
        </div>
    </footer>)
}
export default Footer;