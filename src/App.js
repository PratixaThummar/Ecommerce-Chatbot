// BrowserRouter: This component is used to wrap the entire application and provides the router functionality for the application. It listens for changes in the URL and renders the appropriate component based on the current URL.

// Route: This component is used to define a route for a specific URL path. It takes two props: path, which is the URL path to match, and component, which is the component to render when the URL path matches.

// Switch: This component is used to group multiple Route components together. It renders the first Route component whose path prop matches the current URL path. If no Route components match, it can render a fallback component.

// --------------------------------
// express: This package is a popular web application framework for Node.js. It provides a set of tools for building web servers, handling requests and responses, and managing routes.

// cors: This package is used to enable Cross-Origin Resource Sharing (CORS) in a Node.js application. CORS is a security feature implemented in modern browsers that restricts web pages from making requests to a different domain than the one that served the original page

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Shop from './Components/basics/Shop';
import Preferences from './Components/basics/Preferences';
import Login from './Components/basics/login/Login';
import useToken from './useToken';
import Dashboard from './Components/basics/Dashboard/Dashboard';
import Restuarant from './Components/basics/Resturant';


function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      {/* <Restuarant /> */}
      <Router>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/shop' component={Shop} />
      </Router>
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import Resturant from './Components/basics/Resturant'
// import Chatbot from './Components/basics/Chatbot'
// import Modal from './Components/basics/Modal';
// import Menucard from './Components/basics/Menucard';

// function App() {
//   return (
//    <>
//    <Resturant></Resturant>
//    {/* <Modal></Modal> */}
//    {/* <Menucard></Menucard> */}
//    {/* <Chatbot/> */}
//    {/* <Product/> */}
//    </>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// function App() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title">Sign In</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default App;