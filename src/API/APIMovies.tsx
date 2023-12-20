import axios, {AxiosResponse} from "axios";

export default axios.create({
    baseURL: "https://www.omdbapi.com/",
})<AxiosResponse>