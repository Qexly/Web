import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import DialogsContainer from  './Components/Dialogs/DIalogsContainer.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
 
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
            <Route path='/dialogs' render ={ () => <DialogsContainer 
              store={props.store}
              /> } 
            />

            <Route path='/profile' render={ () => <Profile 
              store={props.store}
              />} 
            /> 

          </div>
        </main>

      </div>
    </BrowserRouter>
    
  );
}


export default App;
