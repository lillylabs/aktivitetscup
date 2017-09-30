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
        <form class="form">
          <div v-if="signup" class="field">
            <label class="label">Navn</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" placeholder="Ola Nordmann">
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
              <span v-if="error.name" class="icon is-small is-right">
                <i class="fa fa-warning"></i>
              </span>
            </div>
            <p v-if="error.name" class="help is-danger">{{ error.name.message }}</p>
          </div>
          <div class="field">
            <label class="label">E-post</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="ola@ski.no">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <span v-if="error.email" class="icon is-small is-right">
                <i class="fa fa-warning"></i>
              </span>
            </div>
            <p v-if="error.email" class="help is-danger">{{ error.email.message }}</p>
          </div>
          <div class="field">
            <label class="label">Passord</label>
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="veldighemmelig">
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="submit" class="button is-primary" :value="signup ? 'Registrer' : 'Logg inn'">
            </div>
            <p v-if="error.general" class="help is-danger">{{ error.general.message }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      signup: false,
      error: {
        name: null,
        email: null,
        general: null
      }
    }
  },
  computed: {

  },
  mounted () {
    this.signup = this.$route.params.signup
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