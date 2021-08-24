import Todo from './components/Todo';
import { Route, Switch } from 'react-router-dom'
//Switch shows that only one component should be rendered at a time.


import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout'

function App() {
//localhost:3000/
//my-page.com/

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}


export default App;

