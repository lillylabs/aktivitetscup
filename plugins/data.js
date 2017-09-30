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
  let userRefs = []

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.email, user.uid)
      store.commit('auth/userSignedIn', { uid: user.uid, email: user.email })
      userRefs.push(db.ref('activities/' + user.uid).on('value', (snapshot) => {
        store.commit('user/activities', snapshot.val())
      }))
      userRefs.push(db.ref('profile/' + user.uid).on('value', (snapshot) => {
        console.log('date', snapshot.val())
        store.commit('user/profile', snapshot.val())
      }))
    } else {
      console.log('no user')
      userRefs.forEach(ref => {
        ref.off('value')
      })
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
