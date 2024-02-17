import parentPlatforms from "../data/parentPlatforms";

const usePlatfroms = () => ({
  data: parentPlatforms,
  isLoading: false,
  error: null,
});

export default usePlatfroms;
