//----------------------------------------------------------------------
// Components Import
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from './components/homeComponents/home.js';

//----------------------------------------------------------------------

//----------------------------------------------------------------------
// Functions Import
import { getUserDataFromCookie } from './utils/appUtils/cookieHelper.js';
// import { initSocket } from './socketIO/socket'
// import inactivityWatcher from './utils/appUtils/inactivityWatcher.js';
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// get token and user details. Init scoket
// let socket
const userDetails = getUserDataFromCookie()
const token = userDetails.token ? userDetails.token : "";

// if (token && !socket) {
//   initSocket(token).then((socketObj) => {
//     socket = socketObj
//     console.log("test socket in app.js-->", socketObj)
//   })
// }
//----------------------------------------------------------------------


//------------------------------------------------------------------------------------------------
// App function
function App() {

  // Defination of private route
  const PrivateRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={innerProps => (token ? <Component userTokenDetails={userDetails} {...innerProps} /> : <Redirect to="/login" />)} />
    );
  };

  // if (token) {
  //   // Initiate inactivity watcher if user is logged in
  //   inactivityWatcher()
  // }

  return (
    <Router >
      <Route path="/" exact component={Home} />

      {/* Private Routes */}
      <PrivateRoute path="/home" exact component={Home} />

    </Router>
  );
}

export default App;
