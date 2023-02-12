import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { OurProperties } from "./pages/OurProperties";
import { About } from "./pages/about";
import { Communities } from "./pages/communities";
import { Contact } from "./pages/contact";
import { MlsSearch } from "./pages/mlssearch";
import { Services } from "./pages/services";
import { News } from "./pages/news";
import { More } from "./pages/moreonblog";
import { ListingItem } from "./pages/listings";
import { useSelector } from "react-redux";
import { Dashboard } from "./pages/dashboard";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/OurProperties/listings" element={<ListingItem />} />
          <Route path="/dashboard/homepage" element={<Homepage />} />
          <Route path="/dashboard/OurProperties" element={<OurProperties />} />
          <Route path="/dashboard/mlsSearch" element={<MlsSearch />} />
          <Route path="/dashboard/communities" element={<Communities />} />
          <Route path="/dashboard/services" element={<Services />} />
          <Route path="/dashboard/about" element={<About />} />
          <Route path="/dashboard/contact" element={<Contact />} />
          <Route path="/dashboard/news" element={<News />} />
          <Route path="/dashboard/news/blog" element={<More />} />
        </Route>
        <Route path="/OurProperties/listings" element={<ListingItem />} />
        <Route path="/" element={<Homepage />} />
        <Route path="OurProperties" element={<OurProperties />} />
        <Route path="mlsSearch" element={<MlsSearch />} />
        <Route path="communities" element={<Communities />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news" element={<News />} />
        <Route path="/news/blog" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
