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

function fbGetMessagesConversationSuscription(business_name, user_name) {
    return firebase.database().ref().child('/messages/' + business_name + '/' + user_name);
}


function fbCreateUser(user) {
    firebase.database().ref('/users/'+user.user_name+'/').set(user);
}

function fbGetUser(user) {
    const route = '/users/' + user.toLowerCase() + '/';
    return firebase.database().ref(route).once('value');
}

function fbGetOnboarding(business) {
    const route = '/onboardings/' + business.toLowerCase() + '/';
    return firebase.database().ref(route).once('value');
}

function fbUpdateOnboarding(business, message, cta) {
    var onboardingOb = {};
    onboardingOb.message = message;
    onboardingOb.cta = cta;
    firebase.database().ref('/onboardings/'+business+'/').set(onboardingOb);
}

function fbAddNewMessage(business, user, message, hour, sender, class_used) {
    const messageOb = {
        text : message,
        type : {
            class_used : class_used
        },
        hour : hour,
        sender : sender
    }
    var pushRef = firebase.database().ref('/messages/'+business+'/'+user).push();
    pushRef.set(messageOb);
}

function fbCreateNewConversation(business, username, message, hour) {
    const conversation  = {
        user : {
            userName: 'Federico'
        },
        lastMessage :  {
            text : message,
            date : hour
        },
        relationship : {
            text : 'Nuevo',
            color : 'orange'
        }
      }
    firebase.database().ref('/conversations/'+business+'/'+username).set(conversation);
}
const doSignInWithEmailAndPassword = (email, password) => {
    ReactGA.event({
        category: 'User',
        action: 'Created an Account'
      });
    auth.signInWithEmailAndPassword(email, password);
}

  const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);
export { 
    fbGetConversationsSuscription, 
    fbCreateNewConversation, 
    fbUpdateOnboarding, 
    fbGetOnboarding,
    fbAddNewMessage,
    fbGetMessagesConversationSuscription,
    fbCreateUser,
    fbGetUser,
    doSignInWithEmailAndPassword,
    doCreateUserWithEmailAndPassword
 };