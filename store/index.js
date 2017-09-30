import { data } from '~/plugins/data.js'

export const state = () => ({
  activities: {}
})

export const mutations = {
  activities (state, activities) {
    state.activities = activities
  }
}

export const plugins = [data]
