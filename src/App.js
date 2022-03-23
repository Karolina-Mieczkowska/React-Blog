import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Navbar/>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/blogs" element={<BlogList />}/>
            <Route path="/blogs/:id" element={<BlogDetails />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
