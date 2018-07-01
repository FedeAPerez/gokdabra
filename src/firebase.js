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

function fbGetConversationsSuscription(business) {
    
    return firebase.database().ref().child('/conversations/' + business);
}
function fbGetMessagesConversationSuscription(business_name, user_name) {
    return firebase.database().ref().child('/messages/' + business_name + '/' + user_name);
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

function fbAddNewMessage(business, user, message, hour) {
    const messageOb = {
        text : message,
        type : {
            class_used : "message-user"
        },
        hour : hour
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

export { 
    fbGetConversationsSuscription, 
    fbCreateNewConversation, 
    fbUpdateOnboarding, 
    fbGetOnboarding,
    fbAddNewMessage,
    fbGetMessagesConversationSuscription
 };