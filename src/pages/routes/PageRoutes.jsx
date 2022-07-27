import { NavBar } from "../../components";
import { Routes, Route, Navigate } from "react-router-dom";
import { SearchFlight, SearchResults, SearchPage } from "../index";
import PriceInfoCard from "../../components/PriceInfoCard/PriceInfoCard";

const PageRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-2">
        <Routes>
          <Route path="SearchFlight" element={<SearchFlight />} />
          <Route path="SearchPage" element={<SearchPage />} />
          <Route path="SearchResults" element={<SearchResults />} />
          <Route path="PriceInfoCard/:id" element={<PriceInfoCard/>} />
          <Route path="/" element={<Navigate to="/SearchPage" />} />
        </Routes>
      </div>
    </>
  );
};

export default PageRoutes;
