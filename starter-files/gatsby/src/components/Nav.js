import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/beers">Beers</Link>
          <Link to="/order">Order</Link>
          <Link to="/pizzas">Pizzas</Link>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
      </ul>
    </nav>
  );
}
