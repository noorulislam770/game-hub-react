import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "27b3328d62524c5aac3a192d9600ff0e",
  },
});
