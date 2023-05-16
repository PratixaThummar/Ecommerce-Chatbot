import React, { useState } from 'react'
import "./style.css"
import Menucard from './Menucard'
import Botdata from './Botdata'
import Navbar from './Navbar'
import Menu from './MenuAPI'
// import Card from './Card'
import Chatbot from './Chatbot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Traditional from './Traditional'
import Traditionalcard from './Traditionalcard'

library.add(faMessage);
const uniqueList = [
    // ... is used to get only array and value rather than nested array
    // new Set is used to get unique valur from array
    ...new Set(Menu.map((currElement) => {
        // console.log(currElement.category)
        return currElement.category
    })), "All"
]

function Restuarant
() {
    // usestate is used manage and store data in menuData
    // useState is a hook in React that allows functional components to have state. It's used to manage state within a component and update it when necessary.
    const [menuData, setmenuData] = React.useState(Menu)
    const [Data, setbotData] = React.useState(Traditional)
    const [menuList, setmenuList] = React.useState(uniqueList)
    const [toggle, setToggle] = useState(false)
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => {
    }
    function filterItem(category) {
        console.log(filterItem)
        if (category === "All") {
            setmenuData(Menu)
            return
        }
        const updatedList = Menu.filter((currElement) => {
            // console.log(currElement.category);
            return currElement.category === category
        });
        // console.log(updatedList);
        setmenuData(updatedList);
    }
    function clickbtn() {
        setToggle(!toggle)
        setShowButton(true);
        console.log("ccc", toggle)
    }

    const [iconVisible, setIconVisible] = useState(true);

    // console.log(menuData)
    return (
        <>
            <div style={"background-color:'red'"}>
                <div className="container ">
                    <Navbar key={filterItem} filterItem={filterItem} uniqueList={menuList} ></Navbar>
                    <Menucard menuData={menuData}></Menucard>
                    {/* <Botdata Data=  {Data}></Botdata> */}
                    {/* <Traditionalcard Data={Data}></Traditionalcard> */}
                </div>
                <div className="right-bottom">
                    <div>
                        {showButton && (
                            <FontAwesomeIcon icon={faMessage} size='3x' backgroundColor='pink' color='green' onClick={() => clickbtn()}
                             
                            />
                        )}
                    </div>
                    {/* <button
                        onClick={() => setToggle(!toggle)}
                        className="btn btn-primary mb-5">
                        Toggley
                    </button> */}
                    {
                        toggle && (
                            <div>
                                <Chatbot></Chatbot>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Restuarant
