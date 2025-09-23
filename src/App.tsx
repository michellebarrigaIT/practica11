import { useState } from 'react'
import './App.css'
import SuccessButton from './components/SuccessButton/SuccessButton'
import ErrorButton from './components/ErrorButton/ErrorButton'
import Notification from './components/Notification/Notification'

function App() {

  return (
    <div>
      <Notification />
      <h1>Notification System Demo</h1>
      <SuccessButton />
      <ErrorButton />
    </div>
  )
}

export default App
