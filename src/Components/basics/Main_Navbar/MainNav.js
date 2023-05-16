import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { faM, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './mainnav.css'
export class MainNav extends Component {
    render() {
        const baseUrl = "http://localhost:3000/";

        function logout_event() {
            localStorage.clear()
            window.location.href = baseUrl + "login";

        }
        return (
            <div className="wrapper">
                <nav>
                    {/* <a href="#" className="Logo">LOGO</a> */}
                    {/* <img className="Logo_img" src="images/logo11.png" alt="" /> */}
                    <h1 className='maintitle'>Ecommerce-ChatBot</h1>

                    <input type="checkbox" id="toggle" />
                    <label for="toggle"><i className="material-icons"> </i></label>
                    <div className="menu">

                        <ul >
                            <li>
                                <h3>
                                    <Link to="/" className='nav-link'>Home</Link>
                                </h3>
                            </li>
                            <li>
                                <h3>

                                    <Link to="/shop" className="nav-link">Shop</Link>
                                </h3>
                            </li>
                            <li>
                                <h3>

                                    <Link to="/cart" className="nav-link">About US</Link>
                                </h3>
                            </li>
                            <li>
                                <h3>

                                    <Link to="/account" className="nav-link">Account</Link>
                                </h3>
                            </li>
                            <li>
                                
                                <FontAwesomeIcon title="logout" icon={faPowerOff} color="white" className='img1' onClick={() => logout_event()} />
                            </li>
                                {/* <h3> */}

                                    {/* <Link to="/account" className="Logout">Logout</Link> */}
                                {/* </h3> */}

                            {/* <div className="navigation ">
                        <a className="button" href="">
                        <FontAwesomeIcon icon={faPowerOff} color="white" className='img1' />
                        <div className="logout" onClick={() => logout_event()}>LOGOUT</div>
                        </a>
                    </div>*/}
                    {/* <div className="logout" </div> */}
                        </ul>
                    </div>
                </nav>
            </div>)
    }
}

export default MainNav