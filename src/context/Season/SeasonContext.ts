import { Seasons_seasons as Season } from "../../generated/Seasons";
import { createContext } from "../../utils";

export type SeasonAPI = {
  currentSeason: Season;
};

const { useContext: useSeasonContext, Provider } = createContext<SeasonAPI>();

export { useSeasonContext, Provider };
