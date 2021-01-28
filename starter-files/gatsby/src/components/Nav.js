import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/beers">Beers</Link>
        </li>
      </ul>
    </nav>
  );
}
