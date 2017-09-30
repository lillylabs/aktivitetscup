<template>
  <div v-if="user" class="typeforms" id="typeform-buttons">
    <a v-show="profile && !profile.firstName" id="complete-profile" class="typeform-share button is-primary is-outlined is-medium" :href="'https://lillylabs.typeform.com/to/q4IMh7?uid=' + uid" data-mode="popup" data-submit-close-delay="0" target="_blank">Fullfør profil</a>
    <a id="register-activity" class="typeform-share button is-primary is-medium" :href="'https://lillylabs.typeform.com/to/tLJKRt?uid=' + uid" data-mode="popup" data-submit-close-delay="0" target="_blank">Registrer ny aktivitet</a>
    <script>
    /* eslint-disable */
    (function() {
      var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = 'typef_orm_share',
        b = 'https://embed.typeform.com/';
      if (!gi.call(d, id)) {
        js = ce.call(d, 'script')
        js.id = id
        js.src = b + 'embed.js';
        q = gt.call(d, 'script')[0]
        q.parentNode.insertBefore(js, q)
      }
    })()
    </script>
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
.typeforms {
  // display: none; // height: 0;
}
</style>

