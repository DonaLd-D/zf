import React from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';

import Home from './pages/home';
import Found from './pages/found';
import News from './pages/news';
import My from './pages/my';
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/'>home</Link>
          <Link to='/found'>found</Link>
          <Link to='/news'>news</Link>
          <Link to='/my'>my</Link>
        </nav>
        <section>
          <Route component={Home} path='/' exact></Route>
          <Route component={Found} path='/found' exact></Route>
          <Route component={News} path='/news' exact></Route>
          <Route component={My} path='/my' exact></Route>
        </section>
      </Router>
    </div>
  );
}

export default App;
