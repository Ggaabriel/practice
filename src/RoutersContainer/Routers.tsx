import { Route, Routes } from 'react-router-dom'
import Projects from '../pages/Projects/Projects'

const RoutersContainer = () => {
  return (
    <>
        <Routes>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
    </>
  )
}

export default RoutersContainer