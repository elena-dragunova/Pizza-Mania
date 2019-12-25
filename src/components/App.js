import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../history'
import Header from './Header'
import Home from './views/Home';
import About from './views/About';
import Catalog from './views/Catalog';
import Contacts from './views/Contacts';
import News from './views/News';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div className="ui container">
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/catalog' component={Catalog} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/news' component={News} />
        </div>

      </Router>
    </div>
  )
};

export default App;
