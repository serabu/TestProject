import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Filters } from "../../FilterPage/Filters/Filters";
import "./CharacterList.scss";
import { CharacterDetails } from "../../CharacterDetails/CharacterDetails";

const BASE_URL = "https://rickandmortyapi.com/api/character";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export const CharacterList: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null
  );
  const currentParams = useRef<Record<string, string>>({});

  const handleCharacterClick = (characterId: number) => {
    setSelectedCharacterId(characterId);
  };

  const handleCloseDetails = () => {
    setSelectedCharacterId(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newParams = Object.fromEntries(queryParams.entries());
        if (
          JSON.stringify(newParams) !== JSON.stringify(currentParams.current)
        ) {
          const response = await axios.get(BASE_URL, {
            params: newParams,
          });
          setCharacters(response.data.results);
          currentParams.current = newParams;
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, [queryParams]);

  return (
    <div>
      <Filters />
      <div className="character-list-container">
        {characters.map((character) => (
          <div
            key={character.id}
            className="character-card"
            onClick={() => handleCharacterClick(character.id)}
          >
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <div>
              <h3 className="character-name">{character.name}</h3>
              <p className="character-info">Status: {character.status}</p>
              <p className="character-info">Species: {character.species}</p>
              <p className="character-info">Gender: {character.gender}</p>
            </div>
          </div>
        ))}
        {selectedCharacterId && (
          <CharacterDetails
            characterId={selectedCharacterId}
            onClose={handleCloseDetails}
          />
        )}
      </div>
    </div>
  );
};
