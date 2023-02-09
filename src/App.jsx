import Footer from './components/Footer'
import Home from './pages/Home'
import HomeDetails from './pages/HomeDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Home />
  },

  {
    path: '/home/:id',
    element: <HomeDetails />
  },
])

function App() {
  
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div> 
  )
}

export default App
