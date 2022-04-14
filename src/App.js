//third party components
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";

//import my own components
import "./App.css";
import Store from "./buyer/storeFront/Store";
import MyNav from "./shared/components/Navigation/MyNav";
import Connect from "./buyer/auth/Connect";
import MyItems from "./buyer/myItems/myItems";
import ButtonComponent from "./shared/components/UIElements/Button";
import SwipeableButton from "./shared/components/SwipeableButton/SwipeableButton";

function App() {
  let routes;

  // in future, we can dynamically render content like this
  // if (window.location.host.split(".")[0] == "shop") {
  // }

  //this is where you add your routes logic
  routes = (
    <Routes>
      <Route path="/connect" element={<Connect />} />
      <Route path="/store" element={<Store />} />
      <Route path="/myItems" element={<MyItems />} />
    </Routes>
  );
  const onSuccess =()=> {
    console.log('Yay! Swipe Success');
  }
  //rendering the routes
  return (
    <Router>
      <MyNav/>
      <ButtonComponent />
        <main>
          <div className='container'>
            <div className='block'>
                <SwipeableButton onSuccess={onSuccess} color='#393939' text='SLIDE TO UNLOCK' />
            </div>
          </div>
          {routes}
        </main>
    </Router>
  );
}

export default App;
