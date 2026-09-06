import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ArticleDetail from "./components/pages/ArticleDetail";
import CreateArticle from "./components/pages/CreateArticle";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100 font-sans">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/create" element={<CreateArticle/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}