<template>
  <div>
    <NavBar/>
    <nuxt/>
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

</style>

