import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import HomePage from './components/pages/home';
import Layout from './components/layout/layout';
import DemoPage from './components/pages/demo';
import './index.css'
function App() {

  return (
    <div className="App">
      <Router>
        <Layout >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/demo" element={<DemoPage/>} />
            <Route
              path="*"
              element={<HomePage to="/" replace />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
