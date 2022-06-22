import axios from "axios";

export const api = axios.create({
    baseURL: 'https://nlw2022impulse-production.up.railway.app/'
})