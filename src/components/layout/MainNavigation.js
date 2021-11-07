import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> ULIMA LTD </div>
      <nav>
        <ul>
          <li><Link to='/'>
              All My Meetups
              </Link>
              </li>
          <li> <Link to='/new-meetup'>
            Add New Meetup
            </Link></li>
          <li><Link to='/myfavorites'>
            My Favorites
            </Link></li>

          <li><Link to='/contactus'>
            Contact
            </Link></li>

          <li><Link to='/about'>
            About Us
            </Link></li>

          <li><Link to='/info'>
            Info
            </Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
