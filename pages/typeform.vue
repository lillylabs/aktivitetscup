<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <span class="button is-large is-static is-primary is-outlined is-loading"></span>
    </div>
    <div class="iframe">
      <iframe v-if="ready" id=”my_typeform” :src="`https://lillylabs.typeform.com/to/${formId}?uid=${uid}&redirect=${redirect}`">
      </iframe>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const ACTIVITY_FORM_ID = 'tLJKRt'
const PROFILE_FORM_ID = 'q4IMh7'

export default {

  data () {
    return {
      form: 'ACTIVITY'
    }
  },
  computed: {
    ...mapState({
      user: (store) => store.auth.user
    }),
    ready () {
      return this.user && this.redirect
    },
    uid () {
      return this.user ? this.user.uid : ''
    },
    formId () {
      return this.form === 'PROFILE' ? PROFILE_FORM_ID : ACTIVITY_FORM_ID
    },
    redirect () {
      return window ? window.location.origin + '/deltager' : null
    }
  },
  beforeMount () {
    this.form = this.$route.params.form ? this.$route.params.form : this.form
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
}

.button.is-loading {
  padding: 3rem;
  margin: 0 auto;
}

.iframe {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

iframe {
  height: 100%;
  width: 100%;
}
</style>
