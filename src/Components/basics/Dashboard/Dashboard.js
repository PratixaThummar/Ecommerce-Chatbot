import React, { Component } from 'react'
import MainNav from '../Main_Navbar/MainNav'
import Shop from '../Shop'
import './dashboard.css'
export class Dashboard extends Component {
    render() {
        return (
            <>

            
                <MainNav />
                {/* <div className="bg"></div> */}

                {/* <img className='mainimg' src="./images/img1.avif" alt="" /> */}
                {/* <img className='mainimg' src="./images/img7.jpg" alt="" /> */}
                {/* <img className='mainimg' src="./images/img5.jpg" alt="" /> */}
                <img className='img' src="./images/img1.jpg" alt="" />
                {/* <img className='mainimg' src="./images/img3.jpg" alt="" /> */}
                {/* <img className='mainimg' src="./images/img4.webp" alt="" /> */}
                {/* <img className='mainimg' src="./images/img6.jpg" alt="" /> */}
                {/* <Shop /> */}

            </>)
    }
}

export default Dashboard