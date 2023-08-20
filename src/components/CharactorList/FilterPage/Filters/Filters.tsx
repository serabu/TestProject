import { useNavigate } from "react-router-dom";
import "./Filters.scss";

export const Filters: React.FC = () => {
  const navigate = useNavigate();
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const queryParams = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      if (value) {
        queryParams.append(key, value.toString());
      }
    }

    const queryString = queryParams.toString();
    navigate(queryString ? `/character?${queryString}` : "/character");
  };

  return (
    <div className="filters-container">
      <h2 className="filters-title">Choose your hero</h2>
      <form onSubmit={handleSearch}>
        <input
          className="filter-input"
          type="text"
          placeholder="Enter name..."
          name="name"
        />
        <select className="filter-select" name="status">
          <option value="">All Statuses</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select className="filter-select" name="species">
          <option value="">All Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>

        <select className="filter-select" name="gender">
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <button type="submit" className="filter-button">
          Search
        </button>
      </form>
    </div>
  );
};
