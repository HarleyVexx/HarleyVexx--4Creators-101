import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Courses from './pages/Courses'
import Legal from './pages/Legal'
import Pitch from './pages/Pitch'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/pitch" element={<Pitch />} />
      </Routes>
    </Layout>
  )
}
