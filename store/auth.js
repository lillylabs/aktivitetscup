export const state = () => ({
  user: null,
  status: 'SIGNING_IN',
  credentials: {
    email: null,
    password: null
  },
  error: {
    message: null
  }
})

export const mutations = {
  signInUser (state, credentials) {
    state.user = null
    state.credentials = credentials
    state.status = 'SIGNING_IN'
    state.error = null
  },
  userSignedIn (state, user) {
    state.user = user
    state.credentials = null
    state.status = 'SIGNED_IN'
    state.error = null
  },
  signUpUser (state, credentials) {
    state.user = null
    state.credentials = credentials
    state.status = 'SIGNING_UP'
    state.error = null
  },
  userSignedUp (state, user) {
    state.user = user
    state.credentials = null
    state.status = 'SIGNED_UP'
    state.error = null
  },
  signOutUser (state) {
    state.user = null
    state.status = 'SIGNING_OUT'
    state.error = null
  },
  userSignedOut (state) {
    state.user = null
    state.status = 'SIGNED_OUT'
    state.error = null
  },
  error (state, error) {
    state.error = error
  }
}
