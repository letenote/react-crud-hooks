import React from 'react';
import { NavLink  } from 'react-router-dom';
import { useHistory } from 'react-router';

const Navbar = () => {
  const history = useHistory();
  return(
    <nav style={{ marginBottom: 20 }}>
      <h1 className="logo-text" onClick={() => history.push('/')}>Contact List</h1>
      <div className="nav-menu">
        <NavLink exact activeClassName={'active'} to="/contact">Home</NavLink> 
        <NavLink activeClassName={'active'} to="/contact/create">Create</NavLink> 
      </div>
    </nav>
  )
}

export default Navbar;