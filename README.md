# React + Fireabse Chat Apps
There are 2 different types of chat apps.
1. Firebase Realtime Database chat app.
2. Firestore chat app.

## Setup
1. create firebase project.
2. put the firebase info into the src/index.js
```
const config = {
    apiKey: "******************************",
    authDomain: "******************************",
    databaseURL: "******************************",
    projectId: "******************************",
    storageBucket: "******************************",
    messagingSenderId: "******************************"
};
```

3. Enable Firebase Realtime and Firestore database in your firebase console.
4. Set security rules, read/write to true in your firebase console..


## Run
```
$npm install

$npm run start
```

## Demo
https://reactjs-firebase-chat.firebaseapp.com/