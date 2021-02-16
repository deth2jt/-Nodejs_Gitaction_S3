export const state = () => ({
    directory: ''
})

export const getters = {
    saveInfo(state, payload) {
        state.directory = payload.directory
    }
}

export const mutations = {
  
}

export const actions = {
  
}
