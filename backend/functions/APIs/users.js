const { initializeApp } = require("firebase/app");
const { admin, db } = require("../util/admin");
const { validateLoginData } = require("../util/validators");
const config = require("../util/config");
const {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} = require("firebase/auth");

initializeApp(config);

const provider = new GoogleAuthProvider();

const auth = getAuth();
// Login
exports.loginUser = (request, response) => {
  const user = {
    email: request.body.email,
    password: request.body.password,
  };
  console.log(user);
  const { valid, errors } = validateLoginData(user);
  if (!valid) return response.status(400).json(errors);
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      const user = userCredential.user;
      response.json({ user });
    })
    .catch((error) => {
      response
        .status(403)
        .json({ general: "wrong credentails, please try again" });
    });
};

//google-login
exports.googleLogin = (request, response) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      response.json({ token });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      response.status(404).json(errorMessage);
    });
};

//sign up
exports.signUpUser = (request, response) => {
  const newUser = {
    name: request.body.name,
    sex: request.body.sex,
    phoneNumber: request.body.phoneNumber,
    email: request.body.email,
    age: request.body.age,
    postcode: request.body.postcode,
    address: request.body.address,
  };

  const { valid, errors } = validateSignUpData(newUser);

  if (!valid) return response.status(400).json(errors);

  let token, userId;
  db.doc(`/customerAccount/${newUser.name}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return response
          .status(400)
          .json({ username: "this username is already taken" });
      } else {
        return signInWithEmailAndPassword(
          auth,
          newUser.email,
          newUser.password
        );
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idtoken) => {
      token = idtoken;
      const userCredentials = {
        name: newUser.name,
        sex: newUser.sex,
        phoneNumber: newUser.phoneNumber,
        email: newUser.email,
        age: newUser.age,
        postcode: newUser.postcode,
        address: newUser.address,
        createdAt: new Date().toISOString(),
        userId,
      };
      return db.doc(`/customerAccount/${newUser.name}`).set(userCredentials);
    })
    .then(() => {
      return response.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return response.status(400).json({ email: "Email already in use" });
      } else {
        return response
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }
    });
};

exports.getUserDetail = (request, response) => {
  let userData = {};

  db.doc(`/customerAccount/${request.user.name}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.userCredentials = doc.data();
        return response.json(userData);
      }
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ error: error.code });
    });
};
