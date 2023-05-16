import React, { useState } from 'react'
import "./style.css"
import Menucard from './Menucard'
import Botdata from './Botdata'
import Navbar from './Navbar'
import Menu from './MenuAPI'
// import Card from './Card'
import Chatbot from './Chatbot'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMessages } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons';

// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Traditional from './Traditional'
import Traditionalcard from './Traditionalcard'

// library.add(faMessages);
const uniqueList = [
  // ... is used to get only array and value rather than nested array
  // new Set is used to get unique valur from array
  ...new Set(Menu.map((currElement) => {
    // console.log(currElement.category)
    return currElement.category
  })), "All"
]

function Shop() {
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
    setShowButton(false);
    setshowchat(true)
    console.log("ccc", toggle)
  }

  const [showchat, setshowchat] = useState(false);
  const baseUrl = "http://localhost:3000/";
  function logout_event() {
    localStorage.clear()
    window.location.href = baseUrl + "login";

  }
  // console.log(menuData)
  return (
    <>
      <div>
        <div className="container">
          {/* <button onClick={() => logout_event()}>logout</button> */}
          <Navbar key={filterItem} filterItem={filterItem} uniqueList={menuList} ></Navbar>
          <Menucard menuData={menuData}></Menucard>
          <Chatbot />
          {/* {showButton && (
            <div>
              <FontAwesomeIcon icon={faComments} size='4x' bounce color='green' onClick={() => clickbtn()} />
            </div>
          )} */}
          {/* <Botdata Data=  {Data}></Botdata> */}
          {/* <Traditionalcard Data={Data}></Traditionalcard> */}
        </div>
        {/* <div className="right-bottom">
          <div>
          
              <div>
                <FontAwesomeIcon icon={faComments} size='4x' bounce color='green' onClick={() => clickbtn()} />
                {showchat && (
                  <Chatbot />
                )
                }
              </div>
            )}
          </div>
          {
            toggle && (
              <Chatbot ></Chatbot>

            )
          } */}
        {/* </div> */}
      </div>
    </>
  )
}

export default Shop