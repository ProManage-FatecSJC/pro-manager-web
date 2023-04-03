import axios from "axios";

const api = axios.create({
  //baseURL: "https://develop-pro-manager-back-promanage-fatecsjc.bohr.io/api/",
  baseURL: "http://localhost:3000/"
});

export default api;