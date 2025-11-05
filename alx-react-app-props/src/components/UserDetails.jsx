import { useContext } from 'react';
import UserContext from '../UserContext';

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
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: 'navy' }}>User Details</h2>
      <p style={{ color: '#333' }}>Name: {userData.name}</p>
      <p style={{ color: '#555' }}>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
