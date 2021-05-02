import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";
import Body from './components/body';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import Hotel from './components/Hotel.js';
import CarRental from './components/CarRental.js';
import ContactPage  from './components/Contact.js';
import Nightclub from './components/Nightclub.js';
import Restaurants from './components/Restaurants.js';
import TravelAgencies from './components/TravelAgencies';
import Homes from './components/home';
import Dashboard from './components/dashboard/Dashboard.js';
function App() {
  return (
     <Router>
        <Switch>
        <Route exact path="/" component={Body}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/Nightclub" component={Nightclub}/>
        <Route exact path="/Restaurants" component={Restaurants}/>
        <Route exact path="/hotel" component={Hotel}/>
        <Route exact path="/contactus" component={ContactPage}/>
        <Route exact path="/travel_agences" component={TravelAgencies}/>
        <Route exact path="/Car_Rental" component={CarRental}/>
        <Route exact path="/homes_welcome" component={Homes}/>
        <Route exact path="/dashboard" component={Dashboard}/>

     
        </Switch>
    </Router>
  );
}

export default App;
