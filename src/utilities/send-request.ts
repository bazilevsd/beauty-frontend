import { getToken } from "./user-services";
//@ts-ignore
export default async function sendRequest(url, method = "GET", payload = null) {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  console.log("payload", payload);

  try {
    const options = { method };
    if (payload) {
      //@ts-ignore//@ts-ignore
      options.headers = { "Content-Type": "application/json" };
      //@ts-ignore
      options.body = JSON.stringify(payload);
      //@ts-ignore
      console.log("options", options.body);
    }
    const token = getToken();
    if (token) {
      // Ensure headers object exists
      //@ts-ignore
      options.headers = options.headers || {};
      // Add token to an Authorization header
      // Prefacing with 'Bearer' is recommended in the HTTP specification
      //@ts-ignore
      options.headers.Authorization = `Bearer ${token}`;
    }
    console.log("we are here options", options);

    const res = await fetch(url, options);
    console.log("and here", res);

    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error("Bad Request");
  } catch (error) {
    console.log("send req error", error);
  }
}
