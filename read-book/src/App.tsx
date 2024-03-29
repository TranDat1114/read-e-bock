
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


import Layout from "./components/layout/layout";
import HomePage from "./components/pages/home/home-page";
import CategoriesPage from "./components/pages/categories/categories-page";
import DemoPage from './components/pages/demo/demo-page';
import LoginPage from './components/pages/authen/login';
import Details from './components/pages/details/details-page';
import ReadBook from './components/pages/read/read-book';
import ProfilePage from './components/pages/profile/profile-page';
import SaveBooks from './components/pages/book-saves/book-save';
import SettingsPage from './components/pages/settings/settings-page';
import DieuKhoan from './components/pages/dieukhoan/dieukhoan-page';
import BaoMat from './components/pages/baomat/baomat-page';
import BanQuyen from './components/pages/banquyen/banquyen-page';
import HoiDap from './components/pages/hoidap/hoidap-page';
import TacGia from './components/pages/author/author-page';
function App() {

  return (
    <div className="App">
      <Router>
        <Layout >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/the-loai" element={<CategoriesPage />} />
            <Route path='news' element={<div>news</div>} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/truyen-tranh" element={<Details />} />
            <Route path='/truyen' element={<ReadBook />} />
            <Route path='/trang-ca-nhan' element={<ProfilePage />} />
            <Route path='/luu-tru' element={<SaveBooks />} />
            <Route path='/cai-dat' element={<SettingsPage />} />
            <Route path='/dieu-khoan' element={<DieuKhoan />} />
            <Route path='/bao-mat' element={<BaoMat />} />
            <Route path='/ban-quyen' element={<BanQuyen />} />
            <Route path='/hoi-dap' element={<HoiDap />} />
            <Route path='/tac-gia' element={<TacGia />} />
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
