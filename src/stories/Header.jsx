import React from 'react';
import PropTypes from 'prop-types';
import logo from './assets/logo.png'
import { Link } from 'react-router-dom';
import '../styles/Banner.css';
import 'bootstrap/dist/css/bootstrap.css';
import { auth } from '../service/firebase';

//import { Button } from '../../stories/Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>      
        <div className='text-primary'>
        <Link to="/">
          <img src = {logo} width="50px" height="50px" alt='TodoAppGo' />
        </Link>
                <h4>ToDoAppGo</h4>
        </div>      
      </div>

      <div className="lmj-user">
                              
                              {user.displayName !== ""}  {
                              <div align="right">
                              <img className="rounded-circle z-depth-2" alt="100x100" src={user.photoURL} alt="" height="50px" width="50px" /><p></p>                
                              <span className="text-primary"><h4> <span></span>{user.displayName}</h4></span><br/>
                              <button className="btn btn-outline-dark" onClick={() => auth.signOut()}>Sign out</button>
                              </div>
                              }                               
        </div>


      <div>
        {/* {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )} */}
      </div>
    </div>
  </header>
);

// Header.propTypes = {
//   user: PropTypes.shape({}),
//   onLogin: PropTypes.func.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   onCreateAccount: PropTypes.func.isRequired,
// };

// Header.defaultProps = {
//   user: null,
// };