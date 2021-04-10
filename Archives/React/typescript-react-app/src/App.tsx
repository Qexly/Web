import React from 'react';
import Navbar from './components/Navbar';
import TodoPage from './pages/TodosPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; //npm install react-router-dom @types/react-router-dom
import AboutPage from './pages/AboutPage';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path='/about' render={() => <AboutPage />}/>
          <Route path='/' exact render={() => <TodoPage />}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
