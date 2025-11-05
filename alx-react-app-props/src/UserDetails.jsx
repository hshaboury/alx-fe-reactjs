import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        margin: '20px auto',
        borderRadius: '10px',
        maxWidth: '400px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3 style={{ color: 'navy' }}>User Details</h3>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
