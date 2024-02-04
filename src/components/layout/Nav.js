import logo from '../../assets/Logo.svg';
import './nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {RiCloseLine,RiMenuFill} from 'react-icons/ri';
import basket from '../../assets/Basket.svg'

const Menu = (props)=>{
    return (
        <ul className='container-links'>
            <li className='link'><Link to="/" onClick={()=>props.setToggleMenu(false)}>Home</Link></li>
            <li className='link'> <Link to="/about" onClick={()=>props.setToggleMenu(false)}>About</Link></li> 
            <li className='link'> <Link to='/menu' onClick={()=>props.setToggleMenu(false)}>Menu</Link></li>
            <li className='link'> <Link to="/reservations" onClick={()=>props.setToggleMenu(false)}>Reservations</Link></li>
            <li className='link'> <Link to="/order-online" onClick={()=>props.setToggleMenu(false)}>Order Online</Link></li>
            <li className='link'> <Link to="/login" onClick={()=>props.setToggleMenu(false)}>Login</Link></li>
            <li className='link'><Link><img alt='basket' className='basket' src={basket}></img></Link></li>
        </ul>
    );
}

const Nav = () => {
    /* const navbar = document.getElementById("nav-small"); */
    const [toggleMenu, setToggleMenu]= useState(false);
  /*   const [elementFixed, setElementFixed] = useState({}); */
    

    return (
    <nav className='padding-sides' data-testid={"navbar"}>
        <div id='nav-small' className={!toggleMenu? 'nav-small': 'nav-small-fixed'}>
            <div className={!toggleMenu? 'nav-small__header': 'nav-small__header padding-sides'} >
                <div className='nav-small__header-icons'>
                    {toggleMenu
                            ? <RiCloseLine size={27} onClick={()=>{
                                setToggleMenu(false);
                                /* navbar.classList.toggle("nav-small-fixed"); */
                            }}/>
                            : <RiMenuFill size={27} onClick={()=>{
                                setToggleMenu(true);
                             /*    navbar.classList.toggle("nav-small-fixed"); */
                            }}/>
                    }
                </div>
                <div className='nav-small__header-logo'>
                    <Link to="/" ><img alt='logo' src={logo}></img></Link>
                </div>
                <div>
                    <Link><img alt='basket' className='basket' src={basket}></img></Link>
                </div>
            </div>
            <div className='nav-small__menu'>
                {toggleMenu && (
                    <Menu stateChanger={setToggleMenu}/>
                    )
                }
            </div>
        </div>
        <div className='nav-large'>
            <div className='nav-large__logo'>
                <Link to="/" ><img alt='logo' src={logo}></img></Link>
            </div>
            <div className='nav-large__menu'>
                <Menu/>
            </div>
        </div>
    </nav>
  )
}

export default Nav