// api calls on projects

import axios from "axios";
import { backendUrl } from "../config/backendUrl";

export async function askQuery(data) {
  console.log(data);
  const url = `${backendUrl}/init`;

  try {
    const response = await axios.post(url, data);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
}
