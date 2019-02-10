import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import MensProducts from './pages/MensProducts';
import WomensProducts from './pages/WomensProducts';

// components
import NavBar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className='grey darken-4'>
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/products/men' component={MensProducts} />
              <Route exact path='/products/women' component={WomensProducts} />
            </Switch>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
