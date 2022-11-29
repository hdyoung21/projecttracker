<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, Dashboard } from './pages'
>>>>>>> 6a6fbe7cade65b26ab90c51936b7bc8b35439615

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

<<<<<<< HEAD
export default App;
>>>>>>> 8fce2b16fcd1db70241f465d94105a285d3c270a
=======
export default App
>>>>>>> 6a6fbe7cade65b26ab90c51936b7bc8b35439615
