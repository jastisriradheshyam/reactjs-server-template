
import logoutSession from './logoutSession';
import config from "../../config/config.json"
const inactivityConf = config.inactivityWatcher


export default function inactivityWatcher() {

  //console.log("function called inactivityWatcher-->")

  let userActivityTimeout = null;
  let userActivityThrottlerTimeout = null

  function resetUserActivityTimeout() {
    clearTimeout(userActivityTimeout);
    userActivityTimeout = setTimeout(() => {
      // console.log("reset user activity timer inactivityWatcher-->")
      inactiveUserAction();
    }, inactivityConf.INACTIVE_USER_TIME_THRESHOLD);
  }

  function inactiveUserAction() {
    // logout logic
    logoutSession()
    // console.log("my timeout logout inactivityWatcher-->")
  }

  function userActivityThrottler() {
    if (!userActivityThrottlerTimeout) {
      userActivityThrottlerTimeout = setTimeout(() => {
        // console.log("call user activity trottle inactivityWatcher-->")
        resetUserActivityTimeout();
        clearTimeout(userActivityThrottlerTimeout);
        userActivityThrottlerTimeout = null;
      }, inactivityConf.USER_ACTIVITY_THROTTLER_TIME);
    }
  }


  function activateActivityTracker() {
    window.addEventListener("mousemove", userActivityThrottler);
    window.addEventListener("scroll", userActivityThrottler);
    window.addEventListener("keydown", userActivityThrottler);
    window.addEventListener("resize", userActivityThrottler);
  }

  activateActivityTracker();
}
