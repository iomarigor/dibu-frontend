import axios from "../libs/axios";

async function loginRequest(credentials) {
  try {
    const res = await axios.post("login", credentials);
    return res;
  } catch (error) {
    throw error;
  }
}
async function authRequest() {
  try {
    const res = await axios.post("auth");
    return res;
  } catch (error) {
    throw error;
  }
}

export { loginRequest, authRequest };
