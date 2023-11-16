var admin = require("firebase-admin");

var serviceAccount = require("./blapp2-firebase-adminsdk-4xcq6-a335889585.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// const uid = "some-uid";
// const additionalClaims = {
//   premiumAccount: true,
// };

// admin
//   .auth()
//   .createCustomToken(uid)
//   .then((customToken) => {
//     console.log(customToken);
//   })
//   .catch((error) => {
//     console.log("Error creating custon token: ", error);
//   });

// const message = {
//   notification: { body, title },
//   data: {
//     content_available: "true",
//     priority: "high",
//     title: "New message arrived",
//   },
//   apns: {
//     payload: {
//       aps: {
//         badge: 1,
//         content_available: 1,
//       },
//     },
//     headers: {
//       "apns-priority": "5", // to send notification on priority
//     },
//     fcm_options: {
//       image:
//         "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//     },
//   },
//   token: userTocken,
// };

const message = {
  notification: {
    title: "test",
    body: "test body",
  },
  data: {
    alarm: JSON.stringify({
      workMode: 1,
      type: "BatteryLevel",
      replayType: 0,
      userRequest: true,
      watch: {
        last_updated: 1598819591,
        date_created: 1586482958,
        active: 1,
      },
      person: {
        last_updated: 1576099570,
        date_created: 1576099570,
      },
      lat: 123.3,
      batteryLevel: 45,
    }),
  },
  apns: {
    payload: {
      aps: {
        badge: 1,
        content_available: 1,
      },
    },
    headers: {
      "apns-priority": "5", // to send notification on priority
    },
    fcm_options: {
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
  },
  token:
    "f9X-yVPyP0pXkvvlMSAR2b:APA91bFcOLo7UfQCAZAc4XGZ0FT5WIlZnEEz9xUCUG0opdFXjv99XhGohT1GzCsklyKkF9MLVEOKwE_G-2XsHo7mA6vHp4Yi4-goyyghAO0oQeGNjgA0IDAiaQuJZrUcYczRkWB_qrUK",
};

admin
  .messaging()
  .send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.log("Error sending message:", error);
  });
