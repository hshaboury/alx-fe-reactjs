function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ fontSize: '18px' }}>Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span></p>
      <p style={{ color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
