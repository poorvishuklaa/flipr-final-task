import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import Contact from './pages/ContactUS/Contact';
import Blogs from './pages/Blogs/Blogs';

import BlogInformation from './pages/Blogs/BlogInformation'; // Import the BlogInformation page

import AuthorPage from './pages/Home/AuthorsAbout'; // Create this component for the author's page

import CategoryPage from './pages/Home/CategoryPage';

import AboutSection from './pages/About/About';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';


function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />

       

          {/* Route for blog information/details */}
          <Route path="/BlogInformation" element={<BlogInformation />} />

          <Route path="/AuthorsAbout" element={<AuthorPage />} />

          <Route path="/category" element={<CategoryPage/>} />


        


          <Route path="/aboutus" element={<AboutSection />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        </Routes>
      </Layout>
    </Router>
  )
}

export default App