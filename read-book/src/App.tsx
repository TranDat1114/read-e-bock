
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Layout from "./components/layout/layout";
import HomePage from "./components/pages/home/home-page";
import CategoriesPage from "./components/pages/categories/categories-page";

function App() {

  return (
    <div className="App">
      <Router>
        <Layout >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
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
