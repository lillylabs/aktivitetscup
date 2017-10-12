<template>
  <article>
    <header class="hero is-light">
      <div class="container">
        <div class="hero-body has-text-centered">
          <h1 class="title">Bruksanvisning</h1>
        </div>
      </div>
    </header>
    <section class="section content">
      <div class="container">

        <p>
          <img src="/1_Aktivitestcup-Trene.-Telle.-Trene.-Skiforbundblå.png" alt="aCup"></img>
        </p>

        <h2>Trene. Telle. Trene.</h2>

        <p>Aktivitetscup gjør aktivisering av en utøver med utviklingshemning LITT lettere.</p>

        <h2>Bli med på 1-2-3</h2>
        <ol>
          <li>Lag bruker med en e-post adresse og et passord du velger.</li>
          <li>Legg inn en aktivitet i Aktivitetscupen.</li>
          <li>Registrer enda en aktivitet.</li>
        </ol>

        <p>Se på bruksanvisningen først eller vær gær'n og bli med uten å se på bruksanvisningen.</p>
        <p>
          <nuxt-link class="button is-primary is-medium is-outlined" :to="{ name: 'inngang', params: { signup: true }}">Legg inn eposten din</nuxt-link>
        </p>

        <h2>Meld deg på Aktivitetscupen</h2>
        <p>
          <img src="/2_Sign_up_1_IMG_0003.PNG" alt="Sign up 1 "></img>
          &nbsp;
          <img src="/3_Sign_up_1_IMG_0004.PNG" alt="Kort beskrivelse av bildet"></img>
        </p>
        <p>Bruk et passord som er lett å huske, men hvis du ikke logger deg ut av aktivitetscupen så trenger du ikke logge deg inn igjen. Aktivitetscupen husker deg fra gang til gang.</p>

        <p>
          <nuxt-link class="button is-primary is-medium is-outlined" :to="{ name: 'inngang', params: { signup: true }}">Registerer deg</nuxt-link>
        </p>

        <h2>Registrer en aktivitet i Aktivitetscupen</h2>

        <p>
          <img src="/4_liksomaktivitet_1_IMG_0005_1.jpg" alt="Registrer ny aktivitet"></img>
          &nbsp;
          <img src="/7_trykk_på_trent_knappen_IMG_0013.3.jpg" alt="trykk på trent knappen"></img>
        </p>
        <p>
          <img src="/8_trykk_på_egentrening_knappen_IMG_0014_3.jpg" alt="trykk på egentrening knappen"></img>
          &nbsp;
          <img src="/9_trykk_på_dato_knappen_IMG_0015_3.jpg" alt="trykk på dato knappen"></img>
        </p>

        <p>
          <img src="/10_trykk_på_OK_dato_knappen_IMG_0016.2.jpg" alt="trykk på OK dato knappen"></img>
          &nbsp;
          <img src="/11_ikke_skriv_kommentar_IMG_0017.2.jpg" alt="ikke skriv kommentar"></img>
        </p>
        <p>
          <img src="/12_trykk_send_inn_IMG_0018.2.jpg" alt="trykk send inn"></img>
        </p>
        <p>
          <nuxt-link class="button is-primary is-medium is-outlined" :to="{ name: 'inngang', params: { signup: true }}">Bli med nå</nuxt-link>
        </p>

        <h2>Ny sesong, ny aktivitetscup</h2>
        <p>Det er litt forandringer på Aktivitetscupen i år.</p>
        <ul>
          <li>Du må lage en bruker i det nye systemet.</li>
          <li>Du trenger ikke fylle ut profilen, vi kan hente over fra det gamle systemet.</li>
          <li>Hvis du ikke logger deg ut kan du komme tilbake til Aktivitetscupen, uten å måtte logge deg inn igjen.</li>
          <li>Søndags e-postene blir stoppet. Du får istedet en deilig ny oversikt over hvilke aktiviteter som er registrert inne på siden.</li>
        </ul>

        <p>
          <nuxt-link class="button is-primary is-medium is-outlined" :to="{ name: 'inngang', params: { signup: true }}">Lag bruker!</nuxt-link>
        </p>

        <h2>Ta kontakt</h2>
        <p>Send ros, spørsmål og problemer til aktivitetscup@gmail.com.</p>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@import "assets/utilities";
.section {
  background: $white;
}

img {
  vertical-align: top;
}
</style>
