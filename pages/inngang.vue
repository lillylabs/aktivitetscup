<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="selector">
          <button class="button is-primary" @click="signup = false" :class="{ 'is-selected': !signup, 'is-outlined': signup }">
            Logg inn
          </button>
          <button class="button is-primary" @click="signup = true" :class="{ 'is-selected': signup, 'is-outlined': !signup }">
            Bli med
          </button>
        </div>
        <form class="form" @submit.prevent="submit()">
          <div class="field">
            <label class="label">E-post</label>
            <div class="control has-icons-left has-icons-right">
              <input v-model="email" class="input" type="email" placeholder="ola@ski.no">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Passord</label>
            <div class="control has-icons-left">
              <input v-model="password" class="input" type="password" placeholder="veldighemmelig">
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="submit" class="button is-primary" :value="signup ? 'Registrer' : 'Logg inn'">
            </div>
            <p v-if="error" class="help is-danger">{{ error.message }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

export default {
  components: {

  },
  data () {
    return {
      name: null,
      email: null,
      password: null,
      signup: false
    }
  },
  computed: {
    ...mapState({
      error: state => state.auth.error,
      user: state => state.auth.user
    })
  },
  methods: {
    ...mapMutations({
      signUpUser: 'auth/signUpUser',
      signInUser: 'auth/signInUser'
    }),
    submit () {
      let credentials = { email: this.email, password: this.password }
      if (this.signup) {
        this.signUpUser(credentials)
      } else {
        this.signInUser(credentials)
      }
    }

  },
  watch: {
    user (newUser, oldUser) {
      if (newUser) {
        this.$router.push('deltager')
      }
    }
  },
  mounted () {
    this.signup = this.$route.params.signup
  },
  fetch ({ store, redirect }) {
    if (store.state.auth.user) {
      return redirect('/deltager')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/utilities";

.container {
  max-width: 35rem;
}

.selector {
  margin-bottom: -2px;
}

.form {
  margin-top: -2px;
  padding: 2rem;
  background: $white;
  margin: 0 auto;
  border: 2px solid $primary;

  .field:last-child {
    margin-top: 1.5rem;

    .help {
      margin-top: 1rem;
    }
  }
}

.is-selected {
  pointer-events: none;
}
</style>