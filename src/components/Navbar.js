import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Navbar = () => {
  const history = useHistory();
  return(
    <nav style={{ marginBottom: 20 }}>
      <h1 className="logo-text" onClick={() => history.push('/')}>Contact List</h1>
      <div className="nav-menu">
        <Link to="/contact">Home</Link>
        <Link to="/contact/create">Create</Link>
      </div>
    </nav>
  )
}

export default Navbar;