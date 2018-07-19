import axios from "axios";
export const client = axios.create({
    baseURL: process.env.BACKEND_URI || "http://localhost:3030",
    headers: {
        "Content-Type": "application/json"
    }
})