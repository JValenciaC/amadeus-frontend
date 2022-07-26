import { NavBar } from "../../components";
import { Routes, Route, Navigate } from "react-router-dom";
import { SearchFlight, SearchHotel, SearchResults,SearchPage } from "../index";

const PageRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-2">
        <Routes>
          <Route path="SearchFlight" element={<SearchFlight />} />
          <Route path="SearchHotel" element={<SearchHotel />} />
          <Route path="SearchPage" element={<SearchPage />} />
          <Route path="SearchResults" element={<SearchResults />} />
          <Route path="/" element={<Navigate to="/SearchFlight" />} />
        </Routes>
      </div>
    </>
  );
};

export default PageRoutes;
