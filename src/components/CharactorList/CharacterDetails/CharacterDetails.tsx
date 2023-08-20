import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterDetails.scss";

interface CharacterDetailsProps {
  characterId: number;
  onClose: () => void;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
}

interface Location {
  id: number;
  name: string;
  dimension: string;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  characterId,
  onClose,
}) => {
  const [lastEpisode, setLastEpisode] = useState<Episode | null>(null);
  const [lastLocation, setLastLocation] = useState<Location | null>(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const characterResponse = await axios.get(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        const character = characterResponse.data;

        if (character.episode.length > 0) {
          const lastEpisodeId = character.episode[character.episode.length - 1]
            .split("/")
            .pop();
          const episodeResponse = await axios.get(
            `https://rickandmortyapi.com/api/episode/${lastEpisodeId}`
          );
          setLastEpisode(episodeResponse.data);
        }

        const locationResponse = await axios.get(character.location.url);
        setLastLocation(locationResponse.data);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  return (
    <div className="character-details">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <h2>Character Details</h2>
      {lastEpisode && (
        <div className="detail-item">
          <h3>Last Episode</h3>
          <p>Name: {lastEpisode.name}</p>
          <p>Air Date: {lastEpisode.air_date}</p>
        </div>
      )}
      {lastLocation && (
        <div className="detail-item">
          <h3>Last Location</h3>
          <p>Name: {lastLocation.name}</p>
          <p>Dimension: {lastLocation.dimension}</p>
        </div>
      )}
    </div>
  );
};
