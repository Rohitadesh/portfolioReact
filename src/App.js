import './App.css';
// import Navbar from "./componets/navbar.js";
import About  from "./componets/about.js";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from './componets/layout';
import Contact from './componets/contact';
import Home from './componets/home';
import Work from './componets/work';
function App() {
  return (
    <>
      <Router>
        {/* <Layout /> */}
        <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='about'  element={<About />} />
                <Route path='work' element={<Work />} />
                <Route path='contact' element={<Contact />} />
              </Route>
          </Routes>
      </Router>
         {/* <Layout /> */}
       
       {/* </Layout>    */}
    </>
  
  
   
   
  )
}

export default App;
