  import React from 'react';
  import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
  import { Login } from './login/login';
  import { Play } from './play/play';
  import { Shop } from './shop/shop';
  import { Scores } from './score/score';
  import { AuthState } from './login/authState';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './app.css';
  
  function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
  
    return (
      <BrowserRouter>
        <div className='body bg-dark text-light'>
          <header className='container-fluid'>
            <nav className='navbar fixed-top navbar-dark'>
              <div className='navbar-brand'>
                Cookie Clicker<sup>&reg;</sup>
              </div>
              <menu className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to=''>
                    Login
                  </NavLink>
                </li>
                {authState === AuthState.Authenticated && (
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='play'>
                      Play
                    </NavLink>
                  </li>
                )}
                {authState === AuthState.Authenticated && (
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='shop'>
                      Shop
                    </NavLink>
                  </li>
                )}
                <li className='nav-item'>
                  <NavLink className='nav-link' to='score'>
                    Scores
                  </NavLink>
                </li>
              </menu>
            </nav>
          </header>
  
          <Routes>
            <Route
              path='/'
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                  }}
                />
              }
              exact
            />
            <Route path='/play' element={<Play userName={userName} />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/score' element={<Scores />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
  
          <footer className='bg-dark text-dark text-muted'>
            <div className='container-fluid'>
              <span className='text-reset'>Elijah Cramer</span>
              <a className='text-reset' href='https://github.com/ecra2001/startup/tree/main'>
                Source
              </a>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
  
  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
  
  export default App;
  