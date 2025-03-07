/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";  
/*
const observations = [];

function nextId() {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}

*/


export async function createObservation(observation, signal) {
  //const now = new Date().toISOString();
  //const newObservation = {
  //  ...observation,
  //  observation_id: nextId(),
  //  created_at: now,
  //  updated_at: now,
  const url = `${API_BASE_URL}/observations`;
  const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ data: observation }),
      signal,  
};
 // observations.push(newObservation);
 // return newObservation;
  return await fetchJson(url, options);
}
export async function listObservations(signal) {
  // return observations;
 // return [];


 const url = `${API_BASE_URL}/observations`;
 const options = {
  headers,
  signal,
 };
 return await fetchJson(url, options);



/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      return Promise.reject({ message: error.message });
    }
  }
}
}
