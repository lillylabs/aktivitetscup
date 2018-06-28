export const state = () => ({
  activities: null,
  profile: null
})

export const mutations = {
  activities (state, activities) {
    console.log('user.activities', activities)
    activities = activities || {}
    state.activities = activities
  },
  profile (state, profile) {
    profile = profile || {}
    state.profile = profile
  }
}
