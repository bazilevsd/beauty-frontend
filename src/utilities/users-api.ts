import sendRequest from "./send-request";

// const BASE_URL = "/users";
const BASE_URL = "http://localhost:3000/users";

//@ts-ignore
export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}
//@ts-ignore
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
