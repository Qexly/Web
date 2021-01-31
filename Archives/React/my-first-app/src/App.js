import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import DialogsContainer from  './Components/Dialogs/DIalogsContainer.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer.jsx';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from "./Components/Login/Login.jsx";

function App(props) {
 
  return (
    <BrowserRouter>
      <div className='wrapper'>

        <div className='app-wrapper-header'>
          <HeaderContainer />
        </div>

        <main>
          <div className='app-wrapper-sidebar'>
            <Navbar />
          </div>
          
          <div className='app-wrapper-content'>
            
            <Route path='/dialogs' render ={ () => <DialogsContainer /> } />

            <Route path='/profile/:userId?' render={ () => <ProfileContainer />} /> 

            <Route path='/users' render={ () => <UsersContainer />} />

            <Route path='/login' render={ () => <LoginPage />} />

          </div>
        </main>

      </div>
    </BrowserRouter>
  );
}


export default App;
