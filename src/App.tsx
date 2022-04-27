import React from 'react'

import { BrowserRouter as Routes } from 'react-router-dom'

import GlobalSyles from './styles/global'
import Router from './routes'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Router />
      </Routes>
      <GlobalSyles/>
    </>
  );
}

export default App
