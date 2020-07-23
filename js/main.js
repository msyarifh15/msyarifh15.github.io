var webpush = require('web-push');

var pushSubscription = {
    "endpoint" : "https://fcm.googleapis.com/fcm/send/dAZ314W_1ZQ:APA91bH2p7k4j8l47XcFGwXSVGSe5QT9REw1dZZ7RKARiXOLStClOzNnCxk5idclvnOfYH53ETy9ylnXe2YXWRwUFZdQIsX27u1ILBLRFP1vwSPW0APPAwEUhr6Qjj70aS99h5aAbyxD",
    "keys" : {
        "p256dh" : "BNE2HOAY0iMKB0Xuf9GOis9+kMoTaqKh5xAU11HP4nKCvegqqI17jbHou3NsaXw7h7ZthwDjj9x6+xUiuF92eHE=",
        "auth" : "6/nT3qmMQUcwn5ILJx5OTQ=="
    }
};

var payload = "Here is a payload!";

var options = {
    gcmAPIKey: 'AAAAGByFHlo:APA91bHONY1xbQzPxD-Ed4ndwBbviesb6TuaIdZHJzsRP6TZlrdN4K6BaRtgdI6l9UptvCw2qJR4bKTfyIsbhsZkes8f6QkvL7r647nOW8770-lOWQjknyiKcc8bXNfiCHjo0ljmFNos',
    TTL: 60
};

webpush.sendNotification(
    pushSubscription,
    payload,
    options
).catch(function (err) {
    console.log(err)
});