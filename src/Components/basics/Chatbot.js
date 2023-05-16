
import React, { Component, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import './Chatbot.css'
import Product from '../basics/ProductList';
import Tradition from '../basics/TraditionalList';
import Resturant from './Resturant';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Chatbot() {

  const [iconVisible, setIconVisible] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [toggle, setToggle] = useState(false)
  const [showchat, setshowchat] = useState(false);

  function clickbtn() {
    setToggle(!toggle)
    setshowchat(true)
    setIconVisible(true);
    setShowButton(false);
  }
  const CloseButton = ({ closeChat }) => (
    <button onClick={closeChat}>Close</button>
  )
  const handleCloseChat = () => {
    setIconVisible(false)
    setshowchat(true)
    console.log(iconVisible)
    console.log(showchat)
};

  return (
    <div>
       <div className="right-bottom">
        <div>
          {showButton && (
            <div>
              <FontAwesomeIcon icon={faComments} size='4x' bounce color='green' onClick={() => clickbtn()} />
              {/* {showchat && (
                <Chatbot />
              )
              } */}
            </div>
          )}
          {toggle && (<Chatbot ></Chatbot>)}
        </div>

      {iconVisible && toggle && (
        <ChatBot headerTitle="Chatbot "
          headerComponent={
            <div className="chatheader">
              <span className="header1">Chatbot</span>
              <FontAwesomeIcon icon={faTimes} className="closeicon" onClick={handleCloseChat} />
            </div>}
          steps={[
            {
              id: 'name',
              message: 'Hey! What is your name?',
              trigger: 'input_name',
            },
            {
              id: 'input_name',
              user: true,
              trigger: 'update_name',
              validator: (value) => {
                if (value === '') {
                  return 'Please enter your name.';
                }
                else {
                  console.log(value)
                }
                return true;
              },
            },
            {
              id: 'update_name',
              message: 'Hi {previousValue}! what would you like to see?',
              trigger: 'Traditional_or_Western'
            },

            {
              id: 'Traditional_or_Western',
              options: [
                {
                  value: "Traditional",
                  label: "Traditional",
                  trigger: "Traditional"
                },
                {
                  value: "Western",
                  label: "Western",
                  trigger: "Western"
                }
              ]
            },
            {
              id: 'Western',
              message: "Great! Here are some of our most popular Western Dresses:",
              trigger: 'WesternDresses'
            },
            {
              id: "Traditional",
              message: "Great! Here are some of our most popular Traditional dresses:",
              trigger: 'TraditionalDress'
            },
            {
              id: 'TraditionalDress',
              // message:"for more go to our website",
              component: <Tradition />,
              trigger: "1"
            },
            {
              id: 'goto',
              message: "for more go to our website"
            },
            {
              id: 'WesternDresses',
              component: <Product />,
              trigger: "1"
            },
            {
              id: '1',
              component: (
                <div> For more go to our website <a href="http://localhost:3000/">Our Website</a> </div>
              ),
              asMessage: true,
              // trigger: '2'
            },
            // {
            //   id: '2',
            //   message: ""
            // },

          ]}
        // {...this.props}
        />

      )}
      </div>
     
    </div>
  )
}


export default Chatbot;