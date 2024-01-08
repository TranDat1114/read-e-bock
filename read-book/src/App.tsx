
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Layout from "./components/layout/layout";
import HomePage from "./components/pages/home/home-page";
import CategoriesPage from "./components/pages/categories/categories-page";
import DemoPage from './components/pages/demo/demo-page';
import LoginPage from './components/pages/authen/login';
function App() {

  return (
    <div className="App">
      <Router>
        <Layout >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path='news' element={<div>news</div>} />
            <Route path="/demo" element={<DemoPage />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>404</h1>
                  <p>Page not found</p>
                </div>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
