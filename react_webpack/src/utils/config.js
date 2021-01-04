import { request } from './request';

// Here get function is created to relive the config from
// static binding of the keys, which causes the config variables to
// be undefined in some cases.
const config = {
  /**
   * Retrieve the value for the key provided
   * @param {String} key the key that holds the value
   */
  get(key) {
    const configString = localStorage.getItem('appConfig');
    const configData = configString ? JSON.parse(configString) : {};
    return configData[key];
  }
};

/**
 * Set the config from the config.json to config
 */
const setConfig = async function () {
  const { body: configJSON } = await request({
    url: '/public/config.json',
    json: true
  });
  const configString = JSON.stringify(configJSON);
  localStorage.setItem('appConfig', configString);
};

export {
  setConfig,
  config
};