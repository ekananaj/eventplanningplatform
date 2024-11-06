import React from 'react';
import EventManager from './components/EventManager';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <div>
      <h1>AI Event Planning Platform</h1>
      <EventManager />
      <Recommendations />
    </div>
  );
}

export default App;
