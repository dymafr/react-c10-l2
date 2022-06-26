import React, { useRef } from 'react';

function App() {
  console.log('Nouveau rendu');
  const count = useRef(0);

  function handleClick(e) {
    count.current++;
    console.log(count.current);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <button onClick={handleClick} className="mb-20">
        Cliquez
      </button>
    </div>
  );
}

export default App;
