import './App.scss';
import { Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Header from './components/Header/Header'

import Start from './pages/Start/Start'

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
          </div>
    </div>
  );
}

export default App;
