import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Footer } from "../Footer";

export function UserAdd({ users, setUser }) {

  //usestate to collect required details
  const history = useHistory();
  const id = users.length + 1;
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [DOB, setDOB] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  // if name contains (" ") space , splitting it to create username
  const split = () => {
    let split = name.split(" ");
    if (split[1][0]) {
      return split[0][0].toUpperCase() + split[1][0].toUpperCase();
    }
    return split[0][0].toUpperCase();
  };

    //checking name to perform split
  const userName = (name === undefined || name === "")
    ? ""
    : (name.includes(" "))
      ? split(name)
      : name[0].toUpperCase();


  const revenue = Math.ceil(Math.random() * 50);

  //creating new user object
  const newUser = { id, name, userName, revenue, location, DOB, profession, gender, image };

  //checking new-user object is valid and updating
  const checkAndSet = () => {
    if (newUser.name === "" || newUser.name === undefined)
      alert("please Enter a valid name!!!");
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
    else {
      setUser([...users, newUser]);
      history.push("/users/");
    }
  };

  return (
    <>
    {/* new-user adding inputs */}
      <div className='adduserHead'>
        <h1>Create New User</h1>
      </div>
      <div className='adduser'>
        <div>
          <span>Name :</span>
          <input type="text" placeholder='Enter the first-Name and Last-Name with space' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <span>Country :</span>
          <input type="text" placeholder='Enter your  current living Country' onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <span>D-O-B :</span>
          <input type="date" placeholder='Enter your Birthday' onChange={(e) => setDOB(e.target.value + "")} />
        </div>
        <div>
          <span>PROFESSION :</span>
          <input type="text" placeholder='Enter your Career name' onChange={(e) => setProfession(e.target.value)} />
        </div>
        <div>
          <span>GENDER :</span>
          <select onChange={(e) => setGender(e.target.value)}>
            <option default hidden>Select your gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Preferred not to say</option>
          </select>
        </div>
        <div>
          <span>Image :</span>
          <input type="url" placeholder="Enter your image Link" onChange={(e) => setImage(e.target.value)} />
        </div>
      </div>
      <div className='addUserBtn'>
        <button onClick={() => checkAndSet()}>ADD USER</button>
        <button className='cancel' onClick={() => history.push("/users/")}>Cancel</button>
      </div>
      {/* footer  */}
      <Footer />
    </>
  );
}
