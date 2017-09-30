<template>
  <header class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item has-text-weight-bold">
        Aktivitetscup
      </nuxt-link>
      <span class="nav-item">
        <nuxt-link to="/#">
          <span>Om cupen</span>
        </nuxt-link>
      </span>
      <span class="nav-item">
        <nuxt-link to="/inngang" class="button">
          <span>Logg inn</span>
        </nuxt-link>
      </span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar-brand {
  width: 100%;
}

.nav-item:nth-child(2) {
  margin-left: auto;
}
</style>

