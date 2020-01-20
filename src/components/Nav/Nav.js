import React from "react"
import { Link } from "react-router-dom"

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/movies?category=upcoming">Upcoming</Link>
      </li>
      <li>
        <Link to="/movies?category=popular">Popular</Link>
      </li>
      <li>
        <Link to="/movies?category=top_rated">Top Rated</Link>
      </li>
      <li>
        <Link to="/movies?category=now_playing">Now Playing</Link>
      </li>
    </ul>
  </div>
)

export default Nav
