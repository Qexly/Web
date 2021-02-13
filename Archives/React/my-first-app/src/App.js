import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from "./Components/Login/Login.jsx";
import React from 'react';
import { connect } from 'react-redux';
import { initialAppTC } from './Redux/appReducer.js'
import Preloader from './Components/common/preloader/Preloader';
//import DialogsContainer from  './Components/Dialogs/DIalogsContainer.jsx';
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DIalogsContainer.jsx'));
//import ProfileContainer from './Components/Profile/ProfileContainer.jsx';
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer.jsx'));

class App extends React.Component {

  componentDidMount() {
    this.props.initialAppTC();
  }
  
  render() {

    if (!this.props.initialized) return <Preloader />

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

              <Route path='/dialogs' render={() => <React.Suspense fallback={<div>Loading...</div>}><DialogsContainer /></React.Suspense>} />

              <Route path='/profile/:userId?' render={() => <React.Suspense fallback={<div>Loading...</div>}><ProfileContainer /></React.Suspense>} />

              <Route path='/users' render={() => <UsersContainer />} />

              <Route path='/login' render={() => <LoginPage />} />

            </div>
          </main>

        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initialAppTC})(App);
