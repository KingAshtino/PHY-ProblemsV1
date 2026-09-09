import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { BrowsePage } from "./pages/BrowsePage";
import { HomePage } from "./pages/HomePage";
import { MajorIndexPage } from "./pages/MajorIndexPage";
import { ProblemPage } from "./pages/ProblemPage";
import { SkierMogulsPage } from "./pages/SkierMogulsPage";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/major" element={<MajorIndexPage />} />
          <Route path="/major/skier-moguls" element={<SkierMogulsPage />} />
          <Route path="/problem/:id" element={<ProblemPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
