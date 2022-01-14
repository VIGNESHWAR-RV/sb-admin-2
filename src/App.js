//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Users } from './components/users/User';
import { Nav } from './components/Nav';
import { Dashboard } from './components/Dashboard';
import { Error } from './components/Error';

function App() {
  const users = [
    {id:1,name:"RamsMama",userName:"RM",revenue: 10,location:"UK",DOB:"1999-01-01",profession:"Civil Engineer",gender:"Male",image:"https://www.bpimaging.com/assets/uploads/2015/02/11406_222.jpg"},
    {id:2,name:"KavinAnna",userName:"KA",revenue: 20,location:"USA",DOB:"1999-02-01",profession:"Buisness Analyst",gender:"Male",image:"https://i.pinimg.com/originals/a2/f4/92/a2f4921b5992b535f9cd21744b25fe6e.jpg"},
    {id:3,name:"SheelaMamma",userName:"SM",revenue: 50,location:"CHINA",DOB:"1999-03-01",profession:"Architect",gender:"Female",image:"https://i.pinimg.com/originals/43/dc/da/43dcdae374bccd3b7f4bc02524dd765b.jpg"},
    {id:4,name:"ChithraAkka",userName:"CA",revenue: 35,location:"INDIA",DOB:"1999-04-01",profession:"Youtuber",gender:"Female",image:"https://pikwizard.com/photos/portrait-of-female-business-executive-holding-clipboard-at-desk--a9c812c905aa494de490b740de737528-l.jpg"},
    {id:5,name:"DeepanThambi",userName:"DT",revenue: 55,location:"UAE",DOB:"1999-05-01",profession:"Statistician",gender:"Male",image:"https://i.pinimg.com/originals/57/a8/73/57a873c463c82d0db84d9e6400cb8472.jpg"},
    {id:6,name:"VenkiAppa",userName:"VA",revenue: 50,location:"GERMANY",DOB:"1999-06-01",profession:"Maths Teacher",gender:"Male",image:"https://www.nissostudios.com/wp-content/gallery/professional-headshots/womens-mens-professional-headshots-nisso-jaime-chalem-photography-miami-fort-lauderdale-west-palm-beach-realtor-attorney-doctor-1165.jpg"},
    {id:7,name:"BharathiAkka",userName:"BA",revenue:60,location:"CANADA",DOB:"1999-07-01",profession:"Administrative Officer",gender:"Female",image:"https://i.pinimg.com/originals/a4/4f/83/a44f8321abec496fa27de1a46cfee54c.jpg"}
  ];
   const[users1,setUser] = useState(users);

  return (
    <div className="App">
      <div className="App-header">
        <Nav/>
      </div> 
    <Switch>
      <Route exact path="/">
        <Dashboard users1={users1}/>
      </Route>
      <Route path="/users">
        <Users users1={users1} setUser={setUser}/>
      </Route>
      <Route path="**">
        <Error/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;