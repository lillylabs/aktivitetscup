<template>
  <div>
    <section class="hero is-light ">
      <div class="hero-body">
        <div v-if="user" class="container has-text-centered">
          <h1 class="title is-spaced">
            <span>Hei {{ user.email }}</span>
            <button @click="signOutUser()" class="button is-primary is-outlined is-small">Logg ut</button>
          </h1>
          <p class="subtitle">Så langt denne sesongen har du samlett
            <strong>{{ activities | totalPoints }} poeng</strong> i cup'en og du er
            <strong>{{ activities | totalKm }} km</strong> på vei mot distansemerket.
          </p>
          <div class="actions">
            <button class="button is-primary is-medium">Registrer ny aktivitet</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div v-if="user && activities.length > 0" class="container">
        <table class="table is-bordered is-striped">
          <thead>
            <tr>
              <th>Aktivitetsdato<br/>Poeng/Km</th>
              <th>Aktivitet</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(activity, key) in activities" :key="key">
              <td>
                {{ activity | date }}
                <br/> Poeng: {{ activity | points }} / Km: {{ activity | km }}
              </td>
              <td>
                {{ activity | title | capitalize}}
                <span v-if="activity.hoursAlpine">
                  <br/>- {{ activity.hoursAlpine }} time(r) i bakken.
                </span>
                <span v-if="activity.crossCountryKm">
                  <br/>- {{ activity.crossCountryKm }} km langrenn.
                </span>
                <span v-if="activity.comment">
                  <br/>- {{ activity.comment }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>

import { mapMutations, mapState } from 'vuex'
const KM_PER_HOUR_ALPINE = 4

function alpineAndCrossCountry (alpineHours, crossCountryKm) {
  let km = 0
  if (crossCountryKm) {
    km += parseInt(crossCountryKm)
  }
  if (alpineHours) {
    km += parseInt(alpineHours) * KM_PER_HOUR_ALPINE
  }
  return km
}

export default {
  components: {

  },
  computed: {
    ...mapState({
      user: (store) => store.auth.user,
      activities: (store) => Object.keys(store.activities).map((key) => {
        return store.activities[key]
      }).sort((a, b) => {
        if (!b.date) {
          return -1
        }
        return a.date > b.date ? -1 : 1
      })
    })

  },
  methods: {
    ...mapMutations({
      signOutUser: 'auth/signOutUser'
    })
  },
  filters: {
    title (activity) {
      var title = activity.activityType

      if (activity.activityType === 'deltatt på samling') {
        title += ' ' + activity.gatheringType
      } else if (activity.activityType === 'deltatt i konkurranse' && activity.competitionType) {
        title = activity.competitionType
      } else if (activity.activityType === 'trent' && activity.trainingType) {
        title = activity.trainingType
      }

      if (activity.meta) {
        title += ': ' + activity.meta
      }

      return title
    },
    totalPoints (activities) {
      return activities.reduce((sum, activity) => {
        return sum + parseInt(activity.points)
      }, 0)
    },
    totalKm (activities) {
      return activities.reduce((sum, activity) => {
        return sum + alpineAndCrossCountry(activity.hoursAlpine, activity.crossCountryKm)
      }, 0)
    },
    points (activity) {
      return activity.points
    },
    date (activity) {
      return activity.date ? activity.date : 'Mangler dato'
    },
    km (activity) {
      return alpineAndCrossCountry(activity.hoursAlpine, activity.crossCountryKm)
    },
    capitalize (text) {
      return text.charAt(0).toUpperCase() + text.slice(1)
    }

  },
  watch: {
    user (newUser, oldUser) {
      if (!newUser) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/utilities";
.section {
  background: $white;
}

.title {
  *:last-child {
    margin-left: 1rem;
    margin-top: 0.4rem;
  }
}

.subtitle {
  max-width: 30rem;
  margin: 0 auto;
}

.actions {
  margin-top: 2rem;
}

.table {
  margin: 0 auto;
}
</style>

