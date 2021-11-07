import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> ULIMA LTD </div>
      <nav>
        <ul>
          <li>
              <Link>All My Meetups</Link>
              </li>
          <li>Add New Meetup</li>
          <li>My Favorites</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>Info</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
