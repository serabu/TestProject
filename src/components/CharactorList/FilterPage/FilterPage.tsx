import { Filters } from "./Filters/Filters";
import "./FilterPage.scss";

const logoUrl = "https://assets-prd.ignimgs.com/2023/08/15/rick-vs-rick-prime-music-video-rick-and-morty-adult-swim-0-2-screenshot-1692118302769.png";

export const FilterPage: React.FC = () => {
  return (
    <div className="filter-page-container">
      <img src={logoUrl} alt="Logo" className="filter-page-logo" /> 
      <Filters />
    </div>
  );
};