import * as firebase from 'firebase';
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
function fbGetConversationsSuscription(business) {
    
    return firebase.database().ref().child('/conversations/' + business);
}
function fbGetMessagesConversationSuscription(business_name, user_name) {
    return firebase.database().ref().child('/messages/' + business_name + '/' + user_name);
}
function fbCreateBusiness(business) {
    var businessOb = {};
    businessOb.business_name = business.business_name;
    businessOb.email = business.email;
    firebase.database().ref('/business/'+business.business_name+'/').set(businessOb);
}

function fbGetOnboarding(business) {
    const route = '/onboardings/' + business.toLowerCase() + '/';
    console.log(business);
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
const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);
export { 
    fbGetConversationsSuscription, 
    fbCreateNewConversation, 
    fbUpdateOnboarding, 
    fbGetOnboarding,
    fbAddNewMessage,
    fbGetMessagesConversationSuscription,
    doSignInWithEmailAndPassword
 };