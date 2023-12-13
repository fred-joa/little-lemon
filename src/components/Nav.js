import logo from '../img/Logo.svg';
import '../css/nav.css';
function Nav(){

    return (
        <nav className='navbar'>
            <div>
                <img src={logo}></img>
            </div>
            
            <ul>
                <li className='nav-links'> <a href='#'> Home</a> </li>
                <li className='nav-links'> <a href='#'> About</a></li> 
                <li className='nav-links'> <a href='#'> Menu</a></li>
                <li className='nav-links'> <a href='#'> Reservations</a></li>
                <li className='nav-links'> <a href='#' >Order Online </a></li>
                <li className='nav-links'> <a href='#'>Login </a></li>
            </ul>

        </nav>
    )
}
export default Nav;