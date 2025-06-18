import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/index'
import FormPage from './pages/form'
import './App.less'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  )
}

export default App
