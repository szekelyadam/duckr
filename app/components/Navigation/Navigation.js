import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { container, navContainer, link } from './styles.css';

function NavLinks({ isAuthed }) {
  if (isAuthed === true) {
    return (
      <ul>
        <li><Link className={link} to="/">Home</Link></li>
      </ul>
    );
  }
  return null;
}

function ActionLinks({ isAuthed }) {
  if (isAuthed === true) {
    return (
      <ul>
        <li>NEW DUCK</li>
        <li><Link className={link} to="/logout">Logout</Link></li>
      </ul>
    );
  }
  return (
    <ul>
      <li><Link className={link} to="/">Home</Link></li>
      <li><Link className={link} to="/auth">Authenticate</Link></li>
    </ul>
  );
}

export default function Navigation({ isAuthed }) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
};

ActionLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
};

NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
};
