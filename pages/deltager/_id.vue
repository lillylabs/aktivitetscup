<template>
  <div>
    <section class="hero is-light ">
      <div class="hero-body">
        <div v-if="user" class="container has-text-centered">
          <h1 class="title is-spaced">
            <span>Hei {{ user.email }}</span>
            <button @click="signOutUser()" class="button is-primary is-outlined is-small">Logg ut</button>
          </h1>
          <p class="subtitle">Så langt denne sesongen har du samlett
            <strong>{{ points }} poeng</strong> i cup'en og
            <strong>{{ km }} km</strong> på vei mot distansemerket.
          </p>
          <div class="actions">
            <button class="button is-primary is-medium">Registrer ny aktivitet</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section">

    </section>
  </div>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

export default {
  components: {

  },
  computed: {
    ...mapState({
      user: (store) => store.auth.user
    }),
    km () {
      // Calculate all km based on activities
      return '5,5'
    },
    points () {
      // Calculate all points based on activities
      return '100'
    }
  },
  methods: {
    ...mapMutations({
      signOutUser: 'auth/signOutUser'
    })
  },
  watch: {
    user (newUser, oldUser) {
      if (!newUser) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/utilities";
.section {
  background: $white;
}

.title {
  *:last-child {
    margin-left: 1rem;
    margin-top: 0.4rem;
  }
}

.subtitle {
  max-width: 30rem;
  margin: 0 auto;
}

.actions {
  margin-top: 2rem;
}
</style>

