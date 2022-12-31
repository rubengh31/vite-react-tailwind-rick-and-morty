import { NavLink } from 'react-router-dom';

export default function Navigator() {
  return (
    <>
      <ul className="main-nav">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? '#1E429F' : '#6B7280' };
            }}
            className="nav-option"
            to="/episodes"
          >
            Episodes
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? '#1E429F' : '#6B7280' };
            }}
            className="nav-option"
            to="/characters"
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? '#1E429F' : '#6B7280' };
            }}
            className="nav-option"
            to="/locations"
          >
            Locations
          </NavLink>
        </li>
      </ul>
    </>
  );
}
