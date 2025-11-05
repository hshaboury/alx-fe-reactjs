import { useContext } from 'react';
import UserContext from '../UserContext';
import UserInfo from './UserInfo';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ color: 'navy' }}>User Profile</h2>
      <p style={{ color: '#333' }}>Welcome, {userData.name}!</p>
      <UserInfo />
    </div>
  );
}

export default UserProfile;
