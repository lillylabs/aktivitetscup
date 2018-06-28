export const state = () => ({
  activitiesByUserId: null,
  profilesByUserId: null
})

export const mutations = {
  activitiesByUserId (state, activities) {
    console.log('admin.activitiesByUserId', activities)
    activities = activities || {}
    state.activitiesByUserId = activities
  },
  profilesByUserId (state, profiles) {
    console.log('admin.profilesByUserId', profiles)
    profiles = profiles || {}
    state.profilesByUserId = profiles
  }
}
