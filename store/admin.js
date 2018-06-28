export const state = () => ({
  activitiesByUserId: null,
  profilesByUserId: null,
  inactiveUserIds: null
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
  },
  inactiveUserIds (state, userIds) {
    console.log('admin.inactiveUserIds', userIds)
    userIds = userIds || {}
    state.inactiveUserIds = userIds
  }
}
