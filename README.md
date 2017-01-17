# ES6 Native Web notifications

An ES6 wrapper library for native web notifications

## What are native web notifications?

If you are not familiar with native web notifications, it's a way to bring push notifications to the web.
Developers can use them to sent push notifications to users, both when on their site and even when the user is offline, it the users allows this.
Check out Google's getting started guide on it! https://developers.google.com/web/fundamentals/getting-started/push-notifications

## Usage

* wn.getPermission() - Get permission from the user to send notifications.
```javascript
    wn.getPermission();
```
* wn.send(title, body, icon, clickEvent) - Sends a notification to the user.

Takes four parameters:
    * Title - The title of the notification
    * Body - The body of the message for the notification
    * Icon - URL to a image shown in the notification. Recommended size for icon is 640px by 640px
    * clickEvent - A callback function that fires when the user clicks on the notification
```javascript
    wn.send('Cool Title', 'Not as cool as this message', 'coolesticon.png', function(){
        console.log('You clicked the notification!');
    });
```

## Credits

* `krasimir` - Webpack library starter
https://github.com/krasimir/webpack-library-starter