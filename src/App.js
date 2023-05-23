import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/components/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="detail" element={<BlogDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
