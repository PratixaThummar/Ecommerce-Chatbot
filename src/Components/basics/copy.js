// import React, { useState } from 'react';
// import './Chatbot.css';
// function Chatbot() {
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSendMessage = async () => {
//     const res = await fetch('../images/shirt2.jpg');
//     const data = await res.blob(); // get image data as a blob

//     // create a URL for the image data
//     const imageUrl = URL.createObjectURL(data);
//     console.log(imageUrl);
//     console.log(res);
//     console.log(data);
//     // set the response to the image element
//     setResponse(<img src={imageUrl} alt="response image" />);
//   };

//   return (
//     <div>

//       <div className="chatbot-container">
//         <div className="chat-header">Chatbot</div>
//         <div className="chat-messages">
//           <div className="message bot-message">
//             <div className="message-avatar"></div>
//             <div className="message-content">
//               Hi there! How can I help you today?
//             </div>
//           </div>
//           <div className="message user-message">
//             <div className="message-avatar"></div>
//             <div className="message-content">
//               I'm looking for information on your products.
//             </div>
//           </div>
//         </div>
//         <div className="chat-input">
//           {/* <input type="text" placeholder="Type your message here" />
//           <button>Send</button> */}
//           <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
//           <button onClick={handleSendMessage}>Send</button>
//           {response && <div>{response}</div>}
//         </div>
//       </div>

//     </div >
//   );
// }
// export default Chatbot;
function Chatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = () => {
    if (message === 'Hi') {
      setResponse('Hello there!');
    } else if (message === 'How are you?') {
      setResponse('I am doing well, thank you for asking!');
    } else {
      setResponse('I did not understand what you said.');
    }
  }

  return (
    <div>
      <h1>Chatbot</h1>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      {response && <p>{response}</p>}
    </div>
  );
}




// =============================================

// import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import ChatBot from 'react-simple-chatbot';
// import { useState } from 'react';

// import "./chatbotstyle.css"
// import { CloseOutlined } from '@ant-design/icons';
// // import Resturant from './Resturant';
// // import Product from './Product';
// import Product from './ProductList'
// import Resturant from './Resturant';
// const Chatbot = () => {
//   const [ChatbotOpen, setChatbotOpen] = useState(false);

//   // const steps = [
//   //   {
//   //     id: '1',
//   //     message: 'Hello! How can I assist you today?',
//   //     trigger: '2',
//   //   },
//   //   {
//   //     id: '2',
//   //     user: true,
//   //     trigger: '3',
//   //   },
//   //   {
//   //     id: '3',
//   //     message: 'Hello! How can ?',
//   //     trigger: '4'
//   //   }, {
//   //     id: '4',
//   //     message: 'Thanks !',
//   //     end: true,

//   //   }
//   // ];

//   const steps = [
//     {
//       "id": "1",
//       "message": "Hey,Welcome to our store",
//       "trigger": "user_input"
//     },
//     {
//       "id": "user_input",
//       "user": true,
//       "trigger": "2"
//     },
//     {
//       "id": "2",
//       "message": "sure. Would you like to browse our products ?",
//       "trigger": "browse_or_help"
//     },
//     {
//       "id": "3",
//       "message": "I  order?",
//       "trigger": "browse_or_help"
//     },
//     {
//       "id": "browse_or_help",
//       "options": [
//         {
//           "value": "browse",
//           "label": "Browse Products",
//           "trigger": "browse"
//         },
//         {
//           "value": "help",
//           "label": "Get Help with Order",
//           "trigger": "order_help"
//         }
//       ]
//     },
//     {
//       "id": "browse",
//       "message": "Great! Here are some of our most popular products:",
//       "trigger": "product_list"
//     },
//     {
//       "id": "product_list",
//       "component": <Product />,
//       "waitAction": true,
//       "trigger": "continue_shopping"
//     },
//     {
//       "id": "continue_shopping",
//       "message": "Would you like to continue shopping or check out?",
//       "trigger": "'continue_or_checkout'"
//     },
//     {
//       "id": "continue_or_checkout",
//       "options": [
//         {
//           "value": "continue",
//           "label": "Continue Shopping",
//           "trigger": "browse"
//         },
//         {
//           "value": "checkout",
//           "label": "Checkout",
//           "trigger": "checkout"
//         }
//       ]
//     },
//     {
//       "id": "order_help",
//       "message": "Sorry to hear that. What's the issue with your order?",
//       "trigger": "order_issue"
//     },
//     {
//       "id": "order_issue",
//       "user": true,
//       "trigger": "order_solution"
//     },
//     {
//       "id": "order_solution",
//       "message": "Thanks for letting us know. We'll look into that and get back to you shortly.",
//       "end": true
//     },
//     {
//       "id": "checkout",
//       "message": "To checkout, please enter your shipping address:",
//       "trigger": "shipping_address"
//     },
//     {
//       "id": "shipping_address",
//       "component": "addressForm",
//       "waitAction": true,
//       "trigger": "payment_method"
//     },
//     {
//       "id": "payment_method",
//       "message": "Please select a payment method:",
//       "trigger": "payment_method_options"
//     },
//     {
//       "id": "payment_method_options",
//       "options": [
//         {
//           "value": "credit_card",
//           "label": "Credit Card",
//           "trigger": "credit_card"
//         },
//         {
//           "value": "paypal",
//           "label": "Paypal",
//           "trigger": "paypal"
//         }
//       ]
//     },
//     {
//       "id": "credit_card",
//       "component": "creditCardForm",
//       "waitAction": true,
//       "trigger": "order_confirmation"
//     },
//     {
//       "id": "paypal",
//       "message": "You will now be redirected to Paypal to complete your purchase.",
//       "end": true
//     },
//     {
//       "id": "order_confirmation",
//       "message": "Your order has been confirmed! Thank you for shopping with us.",
//       "end": true
//     }
//   ]

// //   const theme = {
// //     background: '#f5f8fb',
// //     fontFamily: 'Helvetica Neue',
// //     headerBgColor: '#6B54D3',
// //     headerFontColor: '#fff',
// //     headerFontSize: '15px',
// //     botBubbleColor: '#6B54D3',
// //     botFontColor: '#fff',
// //     userBubbleColor: '#fff',
// //     userFontColor: '#4a4a4a',

// //   };
// //   function chatt(){
// //     console.log(ChatbotOpen)
// //     setChatbotOpen(true)
// //   }
// //   const config = {
// //     // width: "300px",
// //     // height: "400px",
// //     // headerTitle: "Chat",
// //     // headerComponent: (
// //     //   <div>
// //     //     {/* <span>Ch</span> */}
// //     //     <button onClick={() => chatt()}><CloseOutlined /></button>
// //     //   </div>
// //     // )
// //   };

// //   return (
// //     <ThemeProvider theme={theme}
// //     // {...ChatbotOpen ? ( <ChatBot {...config} steps={steps} />) : (
// //     //   <button onClick={() => setChatbotOpen(false)}>Open Chatbot</button>
// //     ><ChatBot {...config} steps={steps} />
// //       {/* <Product steps={steps}/> */}
// //     </ThemeProvider>
// //   );
// // };

// // export default Chatbot;

// import React, { Component } from 'react';
// import ChatBot from 'react-simple-chatbot';

// class Chatbot extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//       email: '',
//       message: ''
//     };
//   }

//   handleNameInput = (value) => {
//     console.log(this.handleNameInput);
//     this.setState({ name: value });
//   }

//   handleEmailInput = (value) => {
//     console.log(this.handleEmailInput);
//     this.setState({ email: value });
//   }

//   handleMessageInput = (value) => {
//     console.log(this.handleMessageInput);
//     this.setState({ message: value });
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.name !== this.state.name) {
//       const steps = this.props.steps;
//       const nameStep = steps.find((step) => step.id === 'name');
//       const message = `Hello, ${this.state.name}! How can I assist you today?`;
//       nameStep.message = message;
//     }
//   }

//     render() {
//       const steps = [
//         {
//           id: 'welcome',
//           message: 'Hello! What is your name?',
//           trigger: 'name'
//         },
//         {
//           id: 'name',
//           user: true,
//           validator: (value) => {
//             if (value === '') {
//               console.log('hhh')
//               return 'Please enter your name.';
//             }
//             else {
//               console.log(value)
//             }
//             return true;
//           },
//           trigger: 'email',
//           // onSend: (value) => {
//           //   console.log(value);
//           //   this.handleNameInput(value);
//           // }
//         },
//         {
//           id: 'email',
//           message: 'Hi {previousValue}! How can I assist you today?',
//           trigger: 'userEmail',
//           validator: (value) => {
//             // if (!value || value.trim() === '') {
//             //   return 'Please enter your email address.';
//             // }
//             if (value === 'p') {
//               return 'Please enter your email address.';
//             }
//             return true;
//           },
//           onSend: (value) => {
//             this.handleEmailInput(value);
//           }
//         },
//         {
//           id: 'userEmail',
//           user: true,
//           trigger: 'message',
//           validator: (value) => {
//             // if (!value || value.trim() === '') {
//             //   return 'Please enter a valid email address.';
//             // }
//             if (value === "hey") {
//               console.log("Sssssssssss", value)
//               return 'Please enter'
//             }
//             console.log(value)
//             return false;
//           },
//           onSend: (value) => {
//             this.handleEmailInput(value);
//           }
//         },
//         {
//           id: 'message',
//           message: 'What message would you like to send?',
//           trigger: 'userMessage',
//           validator: (value) => {
//             if (!value || value.trim() === '') {
//               return 'Please enter a message.';
//             }
//             return true;
//           },
//           onSend: (value) => {
//             this.handleMessageInput(value);
//           }
//         },
//         {
//           id: 'userMessage',
//           user: true,
//           end: true,
//           validator: (value) => {
//             if (!value || value.trim() === '') {
//               return 'Please enter a message.';
//             }
//             return true;
//           },
//           onSend: (value) => {
//             this.handleMessageInput(value);
//           }
//         }
//       ];
//       {this.props}

//       return (
//         <ChatBot
//           steps={steps}
//         />
//       );
//     }
//   }
