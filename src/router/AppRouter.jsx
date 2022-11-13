import { Route, Routes, Navigate } from 'react-router-dom'
import ShortenerPage from '../app'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<ShortenerPage />} />

        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default AppRouter
