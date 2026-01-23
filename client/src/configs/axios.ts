import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_BASEURL || "https://site-builder-2lw8.onrender.com",
  withCredentials: true,
});

export default api;
