import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';

import Home from './pages/home';
import Mapfound from './pages/mapfound/mapfound.js';
import Cityfound from './pages/cityfound/cityfound.js';
function App() {
  return (
    <div className="App">
      <Router>
        <section>
          <Route component={Home} path='/' exact></Route>
          <Route component={Mapfound} path='/mapfound' exact></Route>
          <Route component={Cityfound} path='/cityfound' exact></Route>
        </section>
      </Router>
    </div>
  );
}

export default App;
