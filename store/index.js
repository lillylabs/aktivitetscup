import { data } from '~/plugins/data.js'

export const state = () => ({
  activities: null
})

export const mutations = {
  activities (state, activities) {
    activities = activities || {}
    state.activities = activities
  }
}

export const plugins = [data]
