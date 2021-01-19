import React , {useState } from 'react';

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import HomeSceen from './screens/HomeSceen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


// Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle , setSideToggle] = useState(false);

  return (
   
  <Router>
    {/* Navbar */}
    <Navbar click={()=>setSideToggle(true)}/>


    <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>

    <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>



    {/* Backdrop */}

    <main>
      <Switch>
        <Route exact path='/'  component={HomeSceen} />
        <Route exact path='/product/:id' component={ProductScreen} />
        <Route exact path='/cart' component={CartScreen} />
      </Switch>
    </main>


    {/* HomeScreen */}


    {/* ProductScreen */}



    {/* CartSCreen */}
   


    </Router>


  );
}

export default App;
