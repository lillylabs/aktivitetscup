<template>
  <section class="hero is-light  is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="container">
        <p class="title">
          Velkommen til Activitetscup for mennesker med utviklingshemning i regi av Norges&nbsp;Skiforbund.
        </p>
        <div class="actions">
          <nuxt-link :to="{ name: 'inngang', params: { signup: true }}" class="button is-medium is-primary">
            Bli deltager
          </nuxt-link>
          <nuxt-link to="/inngang" class="button is-medium is-primary is-outlined">
            Logg inn
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import About from '~/components/About.vue'
import NavBar from '~/components/NavBar.vue'

import { mapState } from 'vuex'

export default {
  components: {
    About,
    NavBar
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
      status: state => state.auth.status
    }),
    signingIn () {
      return this.status === 'SIGNING_IN'
    }
  },
  fetch ({ store, redirect }) {
    if (store.state.auth.user) {
      return redirect('/deltager')
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 40rem;
}

.button {
  margin-right: 0.5rem;
  .is-underlined {
    text-decoration: underline;
  }
  &.is-transparent {
    background: transparent;
  }
}
</style>

