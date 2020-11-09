import logo from './logo.svg';
import './App.css';
import {Header, Menu} from './components/header/header'
import {Profile} from './components/profile/profile'
import {Home} from './components/home/home'
import List from './components/list/list'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

function App() {
  let linksMenu = [
    {url: '/profile', desc: "Perfil"}, 
    {url: '/list', desc: "List"},
    {url: '/', desc: "Home"},
  ] 

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/list" component={List} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
