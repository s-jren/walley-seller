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
import Listings from "./seller/listings/Listings";
import CreateListings from "./seller/createlisting/CreateListing";
import Settings from "./seller/settings/Settings";
import LoginScreen from "./seller/login/LoginScreen";

function App() {
  let routes;

  // in future, we can dynamically render content like this
  // if (window.location.host.split(".")[0] == "shop") {
  // }

  //this is where you add your routes logic
  routes = (
    <Routes>
      <Route path="/orders" element={<Connect />} />
      <Route path="/listing" element={<Listings />} />
      <Route path="/createlisting" element={<CreateListings />} />
      {/* <Route path="/myItems" element={<MyItems />} /> */}
      <Route path="/settings" element={<Settings />} />
      <Route path="/logout" element={<LoginScreen />} />
      
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
           
          </div>
          {routes}
        </main>
    </Router>
  );
}

export default App;
