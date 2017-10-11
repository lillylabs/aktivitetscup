<template>
  <header class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item has-text-weight-bold">
        Aktivitetscup
      </nuxt-link>
      <span class="nav-item">
        <nuxt-link to="/info" class="navbar-item has-text-weight-bold">
          <span>Bruksanvisning</span>
        </nuxt-link>
      </span>
    </div>
  </header>
</template>

<script>

export default {

}
</script>


<style lang="scss" scoped>
.navbar-brand {
  width: 100%;
}

.nav-item:nth-child(2) {
  margin-left: auto;
}

</style>

