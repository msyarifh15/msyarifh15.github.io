const webpush = require('web-push');

const vapidKeys = {
    "publicKey":"BDiDzcv7nUvUsXxXdute2xaBjN4MJ3qADhniMsZ_EAbiT1YQlVYl0cZyhpbhK9szqISw2XRsdhuXvSwAaDzn1rg",
    "privateKey":"2ny6cCKeCbetqVad9KHblUQJi-q0V9MZUhQ0dhMqfCw"
};

webpush.setVapidDetails(
    'mailto:msyarifh15@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const pushSubscribtion = {
    endpoint : 'https://fcm.googleapis.com/fcm/send/dAZ314W_1ZQ:APA91bH2p7k4j8l47XcFGwXSVGSe5QT9REw1dZZ7RKARiXOLStClOzNnCxk5idclvnOfYH53ETy9ylnXe2YXWRwUFZdQIsX27u1ILBLRFP1vwSPW0APPAwEUhr6Qjj70aS99h5aAbyxD',
    keys : {
        auth : '6/nT3qmMQUcwn5ILJx5OTQ==',
        p256dh : 'BNE2HOAY0iMKB0Xuf9GOis9+kMoTaqKh5xAU11HP4nKCvegqqI17jbHou3NsaXw7h7ZthwDjj9x6+xUiuF92eHE='
    }
}

webpush.sendNotification(pushSubscribtion, 'Payload body From Server')
