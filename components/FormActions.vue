<template>
  <div v-if="user" class="typeforms" id="typeform-buttons">
    <nuxt-link :to="{ name: 'typeform', params: { form: 'PROFILE' }}" v-show="profile && !profile.firstName" class="button is-primary is-medium is-outlined">Fullfør profil</nuxt-link>
    <nuxt-link :to="{ name: 'typeform', params: { form: 'ACTVITY' }}" class="button is-primary is-medium">Registrer ny aktivitet</nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  computed: {
    ...mapState({
      profile: (store) => store.user.profile,
      user: (store) => store.auth.user
    }),
    uid () {
      return this.user ? this.user.uid : ''
    }
  }
}
</script>


<style lang="scss" scoped>
.button {
  margin: 0.5rem;
}
</style>

