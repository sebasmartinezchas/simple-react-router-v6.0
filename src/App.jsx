import LayoutPublic from "./layouts/LayoutPublic";
import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutPublic/>}>
          <Route element={<Inicio />} index></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogDetails />} path="/blog/:id"></Route>
          <Route element={ <NotFound/>} path="*"></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
