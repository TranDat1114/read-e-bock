import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import HomePage from './components/page/home';
import Layout from './components/layout/layout';
import DemoPage from './components/page/demo';
function App() {

  return (
    <div className="App">
      <Router>
        <Layout >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/demo" element={<DemoPage/>} />
            {/* <Route exace path="/about-me" component={AboutMe} />
            <Route exact path="/socials" component={Socials} /> */}
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
