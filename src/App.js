import React from 'react';

function handleClick(e, from) {
  console.log('CLIC', e);
  console.log('CLIC', from);
}

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <button onClick={(e) => handleClick(e, 'button')} className="mb-20">
        Submit
      </button>
    </div>
  );
}

export default App;
