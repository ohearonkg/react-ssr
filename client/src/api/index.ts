import axios from "axios";

const BASE_URL = "https://react-ssr-api.herokuapp.com";

export function fetchUsers() {
  return axios.get(`${BASE_URL}/users`).then(res => res.data);
}
