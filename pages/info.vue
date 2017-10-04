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
            <h2>Bli med på 1-2-3</h2>
            <ol>
                <li>Skriv inn eposten din og passordet ditt.</li>
                <li>Øv på å registrere en liksomaktivitet, ikke trykk «Send inn».</li>
                <li>Registrer en ekte aktivitet, trykk «Send inn».</li>
            </ol>

            <p>Se på bruksanvisningen først eller vær gær'n og bli med uten å se på bruksanvisningen.</p>
            <p><nuxt-link class="button is-primary is-medium is-outlined" :to="{ name: 'inngang', params: { signup: true }}">Registerer deg</nuxt-link> </p>


            <p>Oppskrift 1</p>
            <h2>Meld deg på Aktivitetscupen</h2>

            <img src="/2_Sign_up_1_IMG_0003.PNG" alt="Sign up 1 "></img>

            <img src="/3_Sign_up_1_IMG_0004.PNG" alt="Kort beskrivelse av bildet"></img>
            
            <p>Bruk et passord som er lett å huske, men hvis du ikke logger deg ut av aktivitetscupen så trenger du ikke logge deg inn igjen. Den nye aktivitetscupen husker deg fra gang til gang.</p>

            <p><nuxt-link class="button is-primary is-medium is-outlined" :to="{ name: 'inngang', params: { signup: true }}">Registerer deg</nuxt-link> </p>

            <p>Oppskrift 2</p>
            <h2>Øv med en liksomaktivitet</h2>
            <p>Det er lettere å registrere den første aktiviteten hvis du øver på å registrere en liksomaktivitet.</p>

            <img src="/4_liksomaktivitet_1_IMG_0005_1.jpg" alt="Registrer ny liksomaktivitet 1"></img>

            <img src="/5_liksomaktivitet_2_IMG_0013.2.jpg" alt="5 liksomaktivitet 2"></img>
            <p>Ikke trykk "send"</p>
            <p><nuxt-link class="button is-primary is-medium is-outlined" :to="{ name: 'inngang', params: { signup: true }}">Registerer deg</nuxt-link> </p>

            <p>Oppskrift 3</p>
            <h2>Registrer en ekte aktivitet i Aktivitetscupen</h2>
            <p>Registrer en ekte aktivitet, avslutt med å trykke «Send inn».</p>

            <img src="/4_liksomaktivitet_1_IMG_0005_1.jpg" alt="Registrer ny aktivitet"></img>

            <img src="/7_trykk_på_trent_knappen_IMG_0013.3.jpg" alt="trykk på trent knappen"></img>

            <img src="/8_trykk_på_egentrening_knappen_IMG_0014_3.jpg" alt="trykk på egentrening knappen"></img>

            <img src="/9_trykk_på_dato_knappen_IMG_0015_3.jpg" alt="trykk på dato knappen"></img>

            <img src="/10_trykk_på_OK_dato_knappen_IMG_0016.2.jpg" alt="trykk på OK dato knappen"></img>

            <img src="/11_ikke_skriv_kommentar_IMG_0017.2.jpg" alt="ikke skriv kommentar"></img>

            <img src="/12_trykk_send_inn_IMG_0018.2.jpg" alt="trykk send inn"></img>

            <p><nuxt-link class="button is-primary is-medium is-outlined" :to="{ name: 'inngang', params: { signup: true }}">Registerer deg</nuxt-link> </p>

            <img src="/1_Aktivitestcup-Trene.-Telle.-Trene.-Skiforbundblå.png" alt="aCup"></img>

            <h2>Ny sesong, ny aktivitetscup</h2>
            <p>Hvis du ikke logger deg ut av aktivitetscupen så trenger du ikke logge deg inn igjen. Den nye aktivitetscupen husker deg fra gang til gang og er litt enklere å bruke enn forrige sesong.</p>

            <p><nuxt-link class="button is-primary is-medium is-outlined" :to="{ name: 'inngang', params: { signup: true }}">Registerer deg</nuxt-link> </p>

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

</style>
