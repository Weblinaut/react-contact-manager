import axios from "axios";
export const client = axios.create({
    baseURL: "http://localhost:27017",
    headers: {
        "Content-Type": "application/json"
    }
})