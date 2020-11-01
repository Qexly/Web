import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from  './Components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>

        <div className='app-wrapper-header'>
          <Header />
        </div>

        <main>
          <div className='app-wrapper-sidebar'>
            <Navbar />
          </div>
          <div className='app-wrapper-content'>
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
          </div>
        </main>

      </div>
    </BrowserRouter>
    
  );
}


export default App;
