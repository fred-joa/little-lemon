import logo from '../img/Logo.svg';
import '../css/nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {RiCloseLine,RiMenuFill} from 'react-icons/ri';
import basket from '../img/Basket.svg'

const Menu = ({stateChanger})=>{
    return (
        <ul className='navbar-links'>
                    <li className='navbar-links__link'><Link to="/" onClick={()=>stateChanger(false)}>Home</Link></li>
                    <li className='navbar-links__link'> <Link to="/about" onClick={()=>stateChanger(false)}>About</Link></li> 
                    <li className='navbar-links__link'> <Link to='/menu' onClick={()=>stateChanger(false)}>Menu</Link></li>
                    <li className='navbar-links__link'> <Link to="/reservations" onClick={()=>stateChanger(false)}>Reservations</Link></li>
                    <li className='navbar-links__link'> <Link to="/order-online" onClick={()=>stateChanger(false)}>Order Online</Link></li>
                    <li className='navbar-links__link'> <Link to="/login" onClick={()=>stateChanger(false)}>Login</Link></li>
                    <li className='navbar-links__link basket-menu'><Link><img className='basket-top' src={basket}></img></Link></li>
        </ul>
    )
}

function Nav(){

    const [toggleMenu, setToggleMenu]= useState(false);

    return (
        <nav className='navbar'>
            <div className='navbar-resp'>
                <div className='navbar-resp__pictures'>
                    <div className='navbar-resp__icons'>
                        {toggleMenu
                                ? <RiCloseLine size={27} onClick={()=>setToggleMenu(false)}/>
                                : <RiMenuFill size={27} onClick={()=>setToggleMenu(true)}/>
                        }
                    </div>
                    <div className='navbar-logo'>
                        <Link to="/" ><img src={logo}></img></Link>
                    </div>
                    <div>
                    <Link><img className='basket-top' src={basket}></img></Link>
                    </div>
                </div>
                <div className='navbar-resp__menu'>
                    {toggleMenu && (
                        <Menu stateChanger={setToggleMenu}/>
                        )
                    }
                    
                </div>
            </div>
            <div className='navbar-normal'>
                <div className='navbar-logo'>
                    <Link to="/" ><img src={logo}></img></Link>
                </div>
                <div className='navbar-links__container'>
                    <Menu/>
                </div>
            </div>

        </nav>
    )
}
export default Nav;