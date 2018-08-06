import * as firebase from 'firebase';
import ReactGA from 'react-ga';

var config = {
    apiKey: "AIzaSyDBKnBlkI-Bz-jaPn3H5LrqPY0O7oDv6eU",
    authDomain: "kdabrademo.firebaseapp.com",
    databaseURL: "https://kdabrademo.firebaseio.com",
    projectId: "kdabrademo",
    storageBucket: "kdabrademo.appspot.com",
    messagingSenderId: "494488149572"
};

firebase.initializeApp(config);
const auth = firebase.auth();

function fbGetConversationsSuscription(entity_name) {
    
    return firebase.database().ref().child('/conversations/' + entity_name);
}

function fbGetMessagesConversationSuscription(user, visitedUser) {
    console.log("voy por " + user + " de " + visitedUser);
    var routeRef = '/messages/' + user + '/' + visitedUser;
    console.log(routeRef);
    return firebase.database().ref().child(routeRef);
}


function fbCreateUser(user) {
    firebase.database().ref('/users/'+user.user_name+'/').set(user);
}

function fbModifyUser(user, parameter, value) {
    firebase.database().ref('/users/'+user.user_name+'/'+parameter).set(value);
}

function fbGetUser(user) {
    const route = '/users/' + user.toLowerCase() + '/';
    return firebase.database().ref(route).once('value');
}

function fbGetUserByEmail(email) {
    
    const route = '/users/';

    return firebase.database().ref(route).orderByChild("email").equalTo(email).once('value');
}

function fbGetOnboarding(user_name) {
    const route = '/onboardings/' + user_name.toLowerCase() + '/';
    return firebase.database().ref(route).once('value');
}

function fbUpdateOnboarding(user_name, message) {
    ReactGA.event({
        category: 'Usuario',
        action: 'Modificación de Onboarding'
      });
    var onboardingOb = {};
    onboardingOb.message = message;
    firebase.database().ref('/onboardings/'+user_name+'/').set(onboardingOb);
}


function fbGetAllUsers() {
    const route = '/users';
    return firebase.database().ref(route).once('value');
}

const doSignInWithEmailAndPassword = (email, password) => {
    ReactGA.event({
        category: 'Usuario',
        action: 'Inició Sesión'
      });
    return auth.signInWithEmailAndPassword(email, password);
}

const doCreateUserWithEmailAndPassword = (email, password) => {
    ReactGA.event({
        category: 'Usuario',
        action: 'Creó una cuenta'
      });
    return auth.createUserWithEmailAndPassword(email, password);
}

export { 
    fbGetConversationsSuscription,
    fbUpdateOnboarding, 
    fbGetOnboarding,
    fbGetMessagesConversationSuscription,
    fbCreateUser,
    fbGetAllUsers,
    fbGetUser,
    fbModifyUser,
    fbGetUserByEmail,
    doSignInWithEmailAndPassword,
    doCreateUserWithEmailAndPassword
 };