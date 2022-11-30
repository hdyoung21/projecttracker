
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, Dashboard } from './pages'
import {AllProjects, addProject, SharedLayout} from './pages/dashboard/'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/'>
        <Route path='all-projects' element={<AllProjects />} />
        <Route path='add-projects' element={<addProject />} />
        {/* <Route path='profile' element={<Profile />} /> */}
        {/* <Route path='/' element={<Dashboard />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
