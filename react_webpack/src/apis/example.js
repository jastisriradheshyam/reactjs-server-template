import { config } from '../utils/config';
import { request } from '../utils/request';

const getExampleList = async function () {
  const serverURL = config.get('serverURL');
  const response = await request({
    url: `${serverURL}/v1/example`,
    json: true
  });
  if (response.status === 200) return response.body.data.exampleList;
  throw {
    desc: "example list fetch error"
  };
};

export {
  getExampleList
};