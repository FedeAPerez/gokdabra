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

function fbCreateNewConversation(business, username, message, hour) {
    const conversation  = {
        user : {
            userId : username,
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

export { fbGetConversationsSuscription, fbCreateNewConversation, fbUpdateOnboarding, fbGetOnboarding };