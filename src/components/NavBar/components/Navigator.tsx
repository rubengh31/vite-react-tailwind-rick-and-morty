import { Link } from 'react-router-dom'

export function Navigator () {
  return (
    <>
      <ul className="main-nav">
        <li>
          <Link className="nav-option" to="/episodes">
            Episodes
          </Link>
        </li>
        <li>
          <Link className="nav-option" to="/characters">
            Characters
          </Link>
        </li>
        <li>
          <Link className="nav-option" to="/locations">
            Locations
          </Link>
        </li>
      </ul>
    </>
  )
}
