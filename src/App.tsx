import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/index'
import FormPage from './pages/form'
import HistoryPage from './pages/history'
import './App.less'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="/form" element={<FormPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  )
}

export default App
