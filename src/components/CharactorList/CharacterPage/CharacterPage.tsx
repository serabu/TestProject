import { CharacterList } from "./CharacterList/CharacterList";
import "./CharacterPage.scss";

export const CharacterPage: React.FC = () => {
  return (
   <div className="characterPage">
    <CharacterList />
   </div>
  );
};

