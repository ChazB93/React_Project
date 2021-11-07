import {Switch, Route} from 'react-router-dom';
import AllMeetupPage from "./pages/AllMyMeetups";
import AddNewMeetupPage from "./pages/AddNewMeetups";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import MyFavorites from "./pages/MyFavorites";
import Layout from './components/layout/Layout';
import Aboutus from './pages/Aboutus';

function App() {
  return (
  <Layout>
  <Switch>
    <Route path='/' exact> 
      <AllMeetupPage />
    </Route>

    <Route path='/new-meetup'>
      <AddNewMeetupPage />
    </Route>

    <Route path='/contactus'>
      <Contact />
    </Route>

    <Route path='/Info'>
      <Info />
    </Route>

    <Route path='/about'>
      <Aboutus/>
    </Route>

    <Route path='/myfavorites'>
      <MyFavorites />
    </Route>

  </Switch>
  </Layout>
  );
}

export default App;
