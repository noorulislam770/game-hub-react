import parentPlatforms from "../data/parentPlatforms";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatfroms = () => ({
  data: parentPlatforms,
  isLoading: false,
  error: null,
});

export default usePlatfroms;
