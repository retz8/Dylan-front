// api calls on projects

import axios from "axios";
import { backendUrl } from "../config/backendUrl";

export async function addProject(data) {
  // console.log(data);
  const url = `${backendUrl}/project/init`;

  try {
    const response = await axios.post(url, data);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
}

export async function askQuestion(data) {
  // console.log(data);
  const url = `${backendUrl}/project/askQuestion`;

  try {
    const response = await axios.post(url, data);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
}

export async function loadProjects(userid) {
  const url = `${backendUrl}/project/loadProjects/${userid}`;

  try {
    const response = await axios.get(url);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
}

export async function loadChatHistory(userid, projectid) {
  const url = `${backendUrl}/project/getChatHistory/${userid}/${projectid}`;

  try {
    const response = await axios.get(url);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
}
