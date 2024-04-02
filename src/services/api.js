import axios from "axios";

export const api = axios.create({
    baseURL: "https://explorer-stage10-atividade-api-restfull.onrender.com"
});