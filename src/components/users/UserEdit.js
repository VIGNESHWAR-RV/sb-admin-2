import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Footer } from "../Footer";

export function UserEdit({ users, setUser }) {

  const { id } = useParams();
  const history = useHistory();
  const user = users.find(user => user.id === +id);

 //getting values from existing user
  const [name, setName] = useState(user.name);
  const [location, setLocation] = useState(user.location);
  const [DOB, setDOB] = useState(user.DOB);
  const [profession, setProfession] = useState(user.profession);
  const [gender, setGender] = useState(user.gender);
  const [image, setImage] = useState(user.image);
  const [userName, setUserName] = useState(user.userName);
  const [revenue, setRevenue] = useState(user.revenue);

  // new user which contains existing user values which can be changed too
  const newUser = { id: +id, name, userName, revenue, location, DOB, profession, gender, image };

  // checking and updating the user values
  const checkAndUpdate = () => {
    if (newUser.name === "" || newUser.name === undefined)
      alert("please Enter a valid name!!!");
    else if (newUser.userName === "" || newUser.userName === undefined || newUser.userName.length > 2)
      alert("please enter a username with maximum of two letters!!!");
    else if (newUser.location === "" || newUser.location === undefined)
      alert("please Enter a valid location!!!");
    else if (newUser.DOB === "" || newUser.DOB === undefined)
      alert("please Enter a valid Date-Of-Birth!!!");
    else if (newUser.profession === "" || newUser.profession === undefined)
      alert("please Enter a valid profession name!!!");
    else if (newUser.gender === "")
      alert("please select any of the options in gender!!!");
    else if (newUser.image === "" || newUser.image === undefined)
      alert("please enter a valid image url");
    else if (newUser.revenue === "" || undefined)
      alert("please enter a contribution amount!!!");
    else {
      const ind = users.indexOf(user);
      users[ind] = newUser;
      setUser(users);
      history.push("/users/");
    }
  };
  return (
    <>
    {/* inputs to edit the user values */}
      <div className='adduserHead'>
        <h1>Update User Details</h1>
      </div>
      <div className='adduser'>
        <div>
          <span>Name :</span>
          <input type="text" value={name} placeholder='Enter the first-Name and Last-Name with space' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <span>UserName:</span>
          <input type="text" value={userName} placeholder='Keep Two Letters you like' onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <span>Country :</span>
          <input type="text" value={location} placeholder='Enter your  current living Country' onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <span>D-O-B :</span>
          <input type="date" value={DOB} placeholder='Enter your Birthday' onChange={(e) => setDOB(e.target.value + "")} />
        </div>
        <div>
          <span>PROFESSION :</span>
          <input type="text" value={profession} placeholder='Enter your Career name' onChange={(e) => setProfession(e.target.value)} />
        </div>
        <div>
          <span>GENDER :</span>
          <select onChange={(e) => setGender(e.target.value)}>
            <option default hidden>{gender}</option>
            <option>Male</option>
            <option>Female</option>
            <option default>Preferred not to say</option>
          </select>
        </div>
        <div>
          <span>Image :</span>
          <input type="url" value={image} placeholder="Enter your image Link" onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
          <span>Contribution :</span>
          <input type="number" value={revenue} placeholder='Enter the contribution Amount' onChange={(e) => setRevenue(e.target.value)} />
        </div>
      </div>
      <div className='addUserBtn'>
        <button onClick={() => checkAndUpdate()}>Update USER</button>
        <button className='cancel' onClick={() => history.push("/users/")}>Cancel</button>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
