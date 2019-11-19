import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <ul className = "navbar-nav">
      <li className = "nav-item">
          <a className = "nav-link" href = "/search">
              Search
          </a>
      </li>
      <li className = "nav-item">
          <a className = "nav-link" href = "/saved">
              Saved
          </a>
      </li>
      </ul>
    </nav>
  );
}

export default Nav;
