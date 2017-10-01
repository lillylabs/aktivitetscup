<template>
  <div>
    <NavBar/>
    <nuxt class="background" />
    <Bottom/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Bottom from '~/components/Bottom.vue'

export default {
  components: {
    NavBar,
    Bottom
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url(~/assets/background.jpeg);
  background-blend-mode: multiply;
  background-size: cover;
}
</style>

