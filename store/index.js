const state = () => ({
  cards: []
})

const getters = {
  allCards (state) {
    return state.cards
  }
}

const mutations = {
  addCard (state, payload) {
    state.cards.push(payload)
  }
}

export default {
  state,
  getters,
  mutations
}
