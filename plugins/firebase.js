import firebase from 'firebase'

if (!firebase.apps.length) {
	var config = {
	    apiKey: "AIzaSyD8X6nVSTlb1dXtmQ3iPY3cIDD62PX_8Ic",
	    authDomain: "nuxt-todo-2f0ed.firebaseapp.com",
	    databaseURL: "https://nuxt-todo-2f0ed.firebaseio.com",
	    projectId: "nuxt-todo-2f0ed",
	    storageBucket: "nuxt-todo-2f0ed.appspot.com",
	    messagingSenderId: "567081210200"
  	};
  	firebase.initializeApp(config)
}

export default firebase