<template>
  <div>
    <section class="hero is-light" :class="{'is-fullheight': !ready }">
      <div class="hero-body" v-if="!ready">
        <span class="button is-large is-static is-primary is-outlined is-loading"></span>
      </div>
      <div class="hero-body" v-show="ready">
        <div class="container has-text-centered">
          <h1 class="title is-spaced">
            <span>Resultat</span>
            <button @click="signOutUser()" class="button is-primary is-outlined is-small">Logg ut</button>
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <!-- <div class="container"> -->
        <table class="table is-bordered is-striped" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Klubb</th>
              <th>Mål</th>
              <th>Sport</th>
              <th>Sum poeng</th>
              <th>Sum km</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(result, key) in resultsByUserUserId" :key="key">
              <td>
                {{ result.name }}
              </td>
              <td>
                {{ result.clubName }}
              </td>
              <td>
                {{ result.goal }}
              </td>
              <td>
                {{ result.sport }}
              </td>
              <td class="is-nowrap">
                {{ result.totalPoints }} poeng
              </td>
              <td class="is-nowrap">
                {{ result.totalKm }} km
              </td>
            </tr>
          </tbody>
        </table>
      <!-- </div> -->
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

function totalPoints (activities) {
  return activities.reduce((sum, activity) => {
    return sum + parseInt(activity.points)
  }, 0)
}

function totalKm (activities) {
  return activities.reduce((sum, activity) => {
    return sum + alpineAndCrossCountry(activity.hoursAlpine, activity.crossCountryKm)
  }, 0)
}

export default {
  computed: {
    ...mapState({
      ready: (store) => store.admin.activitiesByUserId && store.admin.profilesByUserId,
      activitiesByUserId: (store) => {
        if (!store.admin.activitiesByUserId) {
          return {}
        }
        return Object.keys(store.admin.activitiesByUserId).reduce((acc, userId) => {
          acc[userId] = Object.keys(store.admin.activitiesByUserId[userId]).map((key) => {
            return store.admin.activitiesByUserId[userId][key]
          })
          return acc
        }, {})
      },
      profilesByUserId: (store) => {
        if (!store.admin.profilesByUserId) {
          return {}
        }

        return store.admin.profilesByUserId
      },
      resultsByUserUserId: (store) => {
        if (!store.admin.activitiesByUserId || !store.admin.profilesByUserId) {
          return []
        }
        return Object.keys(store.admin.activitiesByUserId).map((userId) => {
          const activities = Object.keys(store.admin.activitiesByUserId[userId]).map((key) => {
            return store.admin.activitiesByUserId[userId][key]
          })

          return {
            name: store.admin.profilesByUserId[userId].firstName + ' ' + store.admin.profilesByUserId[userId].lastName,
            clubName: store.admin.profilesByUserId[userId].clubName,
            goal: store.admin.profilesByUserId[userId].goal,
            sport: store.admin.profilesByUserId[userId].sport,
            totalPoints: totalPoints(activities),
            totalKm: totalKm(activities)
          }
        })
      }
    })
  },
  methods: {
    ...mapMutations({
      signOutUser: 'auth/signOutUser'
    })
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

.button.is-loading {
  padding: 3rem;
  margin: 0 auto;
}

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
  margin-bottom: 2rem;
}

.button+.button {
  margin-left: 1rem;
}

.table {
  margin: 0 auto;
}
</style>

