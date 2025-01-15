import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Community from "./pages/Community";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import MarketData from "./components/MarketData";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/post/:id" element={<BlogDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* <MarketData /> */}
      <Footer />
    </div>
  );
}
