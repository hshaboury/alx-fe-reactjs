import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        border: '2px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px auto',
        textAlign: 'center',
        maxWidth: '300px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ color: 'navy', marginBottom: '15px' }}>Simple Counter</h2>
      <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#333' }}>
        Current Count: {count}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
