let Firebase = require('firebase')

let config = {
  apiKey: process.env.firebaseApiKey,
  authDomain: 'aktivitetscup-skiforbundet.firebaseapp.com',
  databaseURL: 'https://aktivitetscup-skiforbundet.firebaseio.com',
  projectId: 'aktivitetscup-skiforbundet'
}

export const data = store => {
  if (!process.browser) return

  const firebase = Firebase.initializeApp(config)

  const db = firebase.database()
  let userActivities = null

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.email, user.uid)
      store.commit('auth/userSignedIn', { uid: user.uid, email: user.email })
      userActivities = db.ref('activities/' + user.uid)
      userActivities.on('value', (snapshot) => {
        store.commit('activities', snapshot.val())
      })
    } else {
      console.log('no user')
      userActivities.off()
      store.commit('auth/userSignedOut')
    }
  })

  store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case 'auth/signInUser':
        console.log('signIn')
        firebase.auth().signInWithEmailAndPassword(state.auth.credentials.email, state.auth.credentials.password)
          .catch(function (error) {
            store.commit('auth/error', error)
          })
        break
      case 'auth/signUpUser':
        console.log('signUp')
        firebase.auth().createUserWithEmailAndPassword(state.auth.credentials.email, state.auth.credentials.password)
          .catch(function (error) {
            store.commit('auth/error', error)
          })
        break
      case 'auth/signOutUser':
        firebase.auth().signOut()
        break
      default:
        break
    }

    if (mutation.type === 'deleteActivity') {

    }
  })
}
