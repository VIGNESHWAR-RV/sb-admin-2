import { useParams } from 'react-router-dom';
import { Footer } from "../Footer";

export function UserProfile({ users }) {
  let { id } = useParams();
  const profile = users.find((user) => user.id === +id);
  const gender = (profile.gender === "Male" || profile.gender === "Female") ? "," + profile.gender : "";
  return (
    <>
    {/* tags to show user profile */}
      <div className='userProfile'>
        <div className='userImage'>
          <img src={profile.image} alt='profile-pic'></img>
        </div>
        <div className='userinfo'>
          <h1>{profile.name}</h1>
          <h2>{profile.DOB}{gender}</h2>
          <h3> <span> PROFESSION : </span> {profile.profession}</h3>
          <h3> <span>LIVES IN : </span>{profile.location}</h3>
          <h3><span>CONTRIBUTION : </span>${profile.revenue}/-</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
