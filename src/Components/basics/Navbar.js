import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import MainNav from './Main_Navbar/MainNav';


function Navbar({ filterItem, uniqueList }) {

    return (
        <>

            {/* <div className='nav'>

                <div className='img2'>

                    <img className="title" src="images/logo.jpg" alt="" />
                    <ul >
                        <li>
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="nav-link">Shop</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="nav-link">About US</Link>
                        </li>
                        <li>
                            <Link to="/account" className="nav-link">Account</Link>
                        </li>
                    </ul>
                    <div className="navigation ">
                        <a className="button" href="">
                            <FontAwesomeIcon icon={faPowerOff} color="white" className='img1' />
                            <div className="logout" onClick={() => logout_event()}>LOGOUT</div>
                        </a>
                    </div>
                </div>
            </div> */}


            <MainNav/>
            {/* </div > */}

            <div className="navigation ">
                <nav className='navbar bg'>
                    <div className='btn-group'>
                        {
                            uniqueList.map((currElement) => {
                                return (
                                    <button className='btn-group__item' onClick={() => filterItem(currElement)}>{currElement}</button>
                                );
                            })
                        }
                    </div>
                </nav>
                
            </div>
        </>
    )
}

export default Navbar