import React from 'react'

import Routes from './routes'
import Challenges from './components/Challenges'
import ChallengeCode from './components/ChallengeCode'

function App() {
  localStorage.clear()
  return (
    <div className='main-container'>
        <Routes />
    </div>
  );
}

export default App;