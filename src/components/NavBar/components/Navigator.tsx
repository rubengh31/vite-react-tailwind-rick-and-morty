import { NavLink } from 'react-router-dom';
import styles from '../Navbar.module.scss';

export default function Navigator(props: any) {
  return (
    <>
      <ul className={styles.mainNav}>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? '#1E429F' : '#6B7280' };
            }}
            className={styles.navOption}
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
            className={styles.navOption}
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
            className={styles.navOption}
            to="/locations"
          >
            Locations
          </NavLink>
        </li>
      </ul>
      <div className="mr-3">{props.input}</div>
    </>
  );
}
