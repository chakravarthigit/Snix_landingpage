import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import CareersPage from "./pages/careers";
import PrivacyPage from "./pages/privacy";
import TermsPage from "./pages/terms";
import ContactPage from "./pages/contact";

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
