import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/page/home';
import Layout from './components/layout/layout';
function App() {

  return (
    <div className="App">
      <Router>
        <Layout >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {/* <Route exace path="/about-me" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/socials" component={Socials} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
