(function (window) {

  'use strict';
  function defineWn() {
    var wn = {};

    wn.getPermission = function () {

      // Check if the browser supports web notifications
      if (!('Notification' in window)) {
        alert('This browser does not support system notifications');

        // If there is support, check if the permission is already set.
      } else if (Notification.permission === 'granted') {
        // Print to log if acces is granted
        console.log('Web Notifications: Permission Granted');

        // Else, we ask the user for permission
      } else if (Notification.permission !== 'granted') {

        Notification.requestPermission(function (permission) {
        // If the user accepts, log the succes message
          if (permission === 'granted') {
            console.log('Web Notifications: Permission Granted');
          }
        });
      }
    };

    return wn;
  }

  if (typeof wn === 'undefined') {
    window.wn = defineWn();
  } else {
    console.log('wn already defined.');
  }
})(window);
