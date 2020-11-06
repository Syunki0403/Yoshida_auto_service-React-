import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollTop from './components/Template/ScrollTop';
import Top from './components/Top/Base';
import News from './components/News/Base';
import Greering from './components/Greeting/Base';
import Outline from './components/Outline/Base';
import Branding from './components/Branding/Base';
import Recruit from './components/Recruit/Base';
import Contact from './components/Contact/Base';
import Opinion from './components/Contact/Opinion/Base';
import Message from './components/Contact/Message/Base';
import Privacy from './components/Privacy/Base';

function App() {
  return (
    <div>
      <Router>
        <ScrollTop>
          <Route exact path='/' component={Top} />
          <Route exact path='/news' component={News} />
          <Route exact path='/philosophy' component={Greering} />
          <Route exact path='/outline' component={Outline} />
          <Route exact path='/shops' component={Branding} />
          <Route exact path='/recruit' component={Recruit} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/contact/opinion' component={Opinion} />
          <Route exact path='/contact/message' component={Message} />
          <Route exact path='/privacy' component={Privacy} />
        </ScrollTop>
      </Router>
    </div>
  );
}

export default App;
