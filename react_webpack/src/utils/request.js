
/**
 * HTTP request
 * @param {Object} args 
 * @param {String} args.url server url 
 * @param {Boolean} args.json is json response  
 */
const request = async function (args) {
  const response = await fetch(args.url);
  let body = "";
  if (args.json) body = await response.json();
  return {
    status: response.status,
    body
  };
};

export {
  request
};