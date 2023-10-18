
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home'
import ImageProvider from './Context/ImageProvider'



function App() {

  return (
    <>
      <ImageProvider>

        <Home />
      </ImageProvider>
    </>
  )
}

export default App
