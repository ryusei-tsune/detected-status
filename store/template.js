export const state = () => ({
    //$store.state.template.value
    value: null
})
export const getters = {
    //$store.getters["template/computed"]
    computed(state) {
        return state.value
    }
}
export const mutations = {
    //$store.commit("template/mutation")
    mutation(state, payload) {
        state.value = payload
    }
}
export const actions = {
    //$store.dispatch("template/action")
    action({ commit, dispatch, state }, payload) {
        commit("mutation", payload)
    }
}