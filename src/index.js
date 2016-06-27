(function (window) {

    'use strict';
    function define_library() {
        var wn = {};

        wn.greet = function (name) {
            alert("Hello from the " + name + " library.");
        };

        wn.checkCompatibility = function () {

            if (!("Notification" in window)) {
                alert("This browser does not support system notifications");
            }

            // Let's check whether notification permissions have already been granted
            else if (Notification.permission === "granted") {
                // If it's okay let's create a notification
                var notification = new Notification("Hi there!");
            }

            // Otherwise, we need to ask the user for permission
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        var notification = new Notification("Hi there!");
                    }
                });
            }
        };

        return Library;
    }

    if (typeof(Library) === 'undefined') {
        window.Library = define_Library();
    }
    else {
        console.log("wn already defined.");
    }
})(window);