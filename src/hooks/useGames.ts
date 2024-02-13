import useData from "./useData";

export interface Platfrom {
  id: number;
  name: string;
  background_image: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platfrom }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => useData<Game>("/games");

export default useGames;
