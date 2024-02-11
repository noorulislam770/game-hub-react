import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controleer = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        // console.log(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    controleer.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
