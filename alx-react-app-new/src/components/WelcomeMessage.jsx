function WelcomeMessage() {
  return (
    <div
      style={{
        backgroundColor: '#f0f4ff',
        border: '1px solid #d1d9f0',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px auto',
        textAlign: 'center',
        maxWidth: '600px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ color: 'navy', marginBottom: '10px' }}>
        Hello everyone, I am learning React at ALX!
      </h1>
      <p style={{ color: '#333', fontSize: '16px', marginBottom: '5px' }}>
        This is a simple JSX component.
      </p>
      <p style={{ color: '#555', fontSize: '15px' }}>
        I am learning about JSX!
      </p>
    </div>
  );
}

export default WelcomeMessage;
