<template>
  <article>
    <header class="hero is-light">
      <div class="container">
        <div class="hero-body has-text-centered">
          <h1 class="title">Informasjon</h1>
        </div>
      </div>
    </header>
    <section class="section content">
      <div class="container">
        <h2>Slik fungerer det</h2>
        <ul>
          <li>
            <nuxt-link :to="{ name: 'inngang', params: { signup: true }}">Registerer deg</nuxt-link> som deltager</li>
          <li>Fyll ut din profil slik at vi vet hvem du er</li>
          <li>Registerer dine aktiviteter fortløpende</li>
        </ul>

        <p>Ved å delta i Aktivitetcup'en blir du automatisk med i konkurransen om å samle flest poeng.</p>
        <p>På slutten av sesongen blir deltagerne (en kvinne og en mann) med flest poeng premiert.</p>
        <p>I tillegg vil det dukke opp små konkurranser underveis i sesongen.</p>

        <h2>Aktivitetcup.no</h2>
        <p>Dette er første versjon. Vi kommer til å forbedre nettstedet underveis i sesongen.</p>

        <h2>Nytt av året</h2>
        <p>I år er systemet forbedret bittelitt. Skjemaene er like, men du vi vet hvem du er fordi du logger inn gjennom dette nettstedet. Vi håper det gjør opplevelsen bedre. Hvis du lar være å logge ut vil nettstedet huske deg fra gang til gang.</p>
        <p>Du som var med oss i forrige sesong kan vente med å fylle i profilen, så fyller vi den med informasjonen vi allerede har så fort som mulig.</p>
        <p>En del av informasjonen som kom med e-postene er ikke klart her på aktivitetscup.no enda, men vil komme snart.</p>

        <h2>Kontakt</h2>
        <p>Har du spørsmål eller problemer send en e-post til aktivitetscup@gmail.com.</p>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@import "assets/utilities";
.section {
  background: $white;
}
</style>
