import React from 'react';
import {HashRouter as Router,Route,Redirect} from 'react-router-dom';

import Home from './pages/home';
import Mapfound from './pages/mapfound/mapfound.js';
import Cityfound from './pages/cityfound/cityfound.js';
function App() {
  return (
    <div className="App">
      <Router>
        <section>
          <Route component={Home} path='/home'></Route>
          <Route path='/' exact>
            <Redirect to='/home'></Redirect>
          </Route>
          <Route component={Mapfound} path='/mapfound' exact></Route>
          <Route component={Cityfound} path='/cityfound' exact></Route>
        </section>
      </Router>
    </div>
  );
}

export default App;
