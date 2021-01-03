
import { removeCookie } from './cookieHelper';
import callAPI from '../../modules/apiService.js';

export default function logoutSession() {

  //------------------------------------------------------------------
  //API Calls
  callAPI('GET', 'logoutroute').then((result) => {
    console.log("API result logout:-->", result);
    removeCookie()
    window.location = '/login'
  }).catch((e) => {
    console.log("Error while logout:-->", e);
  })

  //------------------------------------------------------------------

}
