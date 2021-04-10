import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from  './Components/Dialogs/Dialogs.jsx';
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
            <Route path='/dialogs' render ={ () => <Dialogs 
              messages={props.state.dialogsPage.messagesData} 
              dialogs={props.state.dialogsPage.dialogsData}
              state={props.state}
              dispatch={props.dispatch}
              /> } 
            />

            <Route path='/profile' render={ () => <Profile 
              posts={props.state.profilePage.postData} 
              newPostText={props.state.profilePage.newPostText} 
              dispatch={props.dispatch}
              />} 
            /> 

          </div>
        </main>

      </div>
    </BrowserRouter>
  );
}


export default App;
