import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home'
import Resume from './pages/Resume/Resume'

function App() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
