import fetch from 'dva/fetch';

/**
 * Check response status which is network
 *
 * @param {object} response
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.message = response;
  throw error;
}

/**
 * Check data status
 * @param {object} data which is data after jsoning
 */
function checkDataStatus(data) {
  if (data.retcode === '0' || data.result === 1) {
    return data;
  }

  throw new Error(data.message);
}

/**
 * Requests a URL, returning a promise.
 *
 * @param {string} url The URL that we want to request.
 * @param {object} options The options that we pass to fetch.
 * @returns {object} An object is data.
 */
export default async function request(url, options) {
  const response = await fetch(url, options);

  checkStatus(response);

  const data = await response.json();

  checkDataStatus(data);

  return data;
}
