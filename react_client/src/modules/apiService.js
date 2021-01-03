import axios from 'axios';
import config from '../config/config.json'
import { getTokenOnly } from '../utils/appUtils/cookieHelper.js';
let token = getTokenOnly()

if (token) {
  axios.defaults.headers.common.authorization = `Bearer ${token}`;
}

/**
 * Method for calling APIs.
 * @param {String} method : Method using which the api is called(GET, POST, etc.)
 * @param {String} route : URL of the API
 * @param {Object} payload : Object/data to be sent as input.
 * @returns {Promise} Promise
 */
const callAPI = (method, route, payload = {}) => {
  return new Promise((resolve, reject) => {

    let args = {
      method: method.toLowerCase(),
      url: config.backendServerUrl + route,
      data: payload
    }

    try {
      axios(args).then(response => {
        // console.log("response console in called api:", response)
        if (response.data.success)
          resolve(response.data.message ? response.data.message : response.data.data ? response.data.data : response.data.disc);
        else
          response.data.message ? reject(response.data.message) : response.data.error ? reject(response.data.error) : reject(response.data.disc)
      }).catch(e => {
        // console.log("Error in called api :==>", url, e)
        if (e.response && e.response.status === 401) {
          window.location = '/'
          localStorage.clear();
        } else {
          // console.log("Error in called api :==>", url, e)
          reject(e);
        }
        reject(e);
      });

    } catch (error) {
      // console.log('Error in called api :==>', url, error);
      reject(error)
    }
  })
}


export default callAPI;
