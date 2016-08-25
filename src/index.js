(function(window) {

    'use strict';

    function defineWn() {
        var wn = {};


        //@todo JSdocs needed here
        wn.getPermission = function() {

            // Check if the browser supports web notifications
            if (!('Notification' in window)) {
                console.log('Web Notification: This browser does not support system notifications');

                // If there is support, check if the permission is already set.
            } else if (Notification.permission === 'granted') {
                // Print to log if acces is granted
                console.log('Web Notifications: Permission already granted');

                // Else, we ask the user for permission
            } else if (Notification.permission !== 'granted') {

                Notification.requestPermission(function(permission) {
                    // If the user accepts, log the succes message
                    if (permission === 'granted') {
                        console.log('Web Notifications: Permission granted');
                    }
                });
            }
        };

        wn.send = function(title, body, icon) {
            let options = {
                body: body,
                icon: icon
            }
            new Notification(title, options);
        }







        //Return the library
        return wn;

    }

    window.wn = defineWn();
    // @todo fix this function
    // if (typeof wn === 'undefined') {
    //     window.wn = defineWn();
    // } else {
    //     console.log('Web Notifications: Already defined.');
    // }
})(window);
