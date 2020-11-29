import './App.scss';
import { Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Start from './pages/Start/Start'
import Classes from './pages/Classes/Classes'
import About from './pages/About/About'

function App() {
  return (
    <div className="App">
          <Header />
          <div>
            <Route exact path='/'  render={() => (
              <Home />
            )} />
            <Route exact path='/start'  render={() => (
              <Start />
            )} />
            <Route exact path='/classes'  render={() => (
              <Classes />
            )} />
            <Route exact path='/about'  render={() => (
              <About />
            )} />
          </div>
    </div>
  );
}

export default App;
