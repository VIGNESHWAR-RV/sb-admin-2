import users from '../../SVGs/users.svg';
import { Route, Switch } from 'react-router-dom';
import { UserList } from './UserList';
import { UserAdd } from './UserAdd';
import { UserEdit } from './UserEdit';
import { UserProfile } from './UserProfile';

export function Users({ users1, setUser }) {

  return (
    //svg for users
    <div className='content'>
      <div className='svgs'>
        <object className='world' type="image/svg+xml" data={users}>
          <img src={users} alt="imagee" />
        </object>
      </div>
      {/* welcome message */}
      <div className="Body">
        <section className='welcome'>
          <h1> Our precious USERS!</h1>
        </section>
        {/* routes */}
        <section className='mainContent'>
          <Switch>
            <Route exact path="/users/">
              <UserList users={users1} setUser={setUser} />
            </Route>
            <Route exact path="/users/add">
              <UserAdd users={users1} setUser={setUser} />
            </Route>
            <Route exact path="/users/edit/:id">
              <UserEdit users={users1} setUser={setUser} />
            </Route>
            <Route exact path="/users/:id">
              <UserProfile users={users1} />
            </Route>
          </Switch>
        </section>
      </div>
    </div>
  );
}




