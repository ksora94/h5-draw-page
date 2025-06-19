import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.less'

// 使用React.lazy异步加载页面组件
const IndexPage = lazy(() => import('./pages/index'))
const FormPage = lazy(() => import('./pages/form'))
const HistoryPage = lazy(() => import('./pages/history'))
const WheelPage = lazy(() => import('./pages/wheel'))

// 加载状态组件
const Loading = () => <div className="page-loading">页面加载中...</div>

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<IndexPage />}/>
          <Route path="/form" element={<FormPage />} />
          <Route path="/wheel" element={<WheelPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
