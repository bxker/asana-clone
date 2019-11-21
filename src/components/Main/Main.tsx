import React from 'react';
import Tasks from '../Tasks/Tasks'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Main Component</h1>
      {Tasks}
    </div>
  );
}

export default App;