import ErrorButton from './components/ErrorButton/ErrorButton'
import Notification from './components/Notification/Notification'
import Navbar from './components/Navbar/Navbar'
import './App.scss'

function App() {

  return (
    <div>
      <Notification />
      <Navbar />
      <h1>Notification System Demo</h1>
      <ErrorButton />
    </div>
  )
}

export default App
