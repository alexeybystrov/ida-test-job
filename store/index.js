const state = () => ({
  cards: [
    {
      id: 777,
      name: 'a',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: 111,
      image: 'https://www.fillmurray.com/250/150'
    },
    {
      id: 888,
      name: 'b',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: 111,
      image: 'https://www.fillmurray.com/250/151'
    },
    {
      id: 999,
      name: 'c',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: 111,
      image: 'https://www.fillmurray.com/250/152'
    }
  ]
})

const getters = {
  allCards (state) {
    return state.cards
  },

  sortedByIdCards (_state, { allCards }) {
    return allCards.slice().sort((a, b) => b.id - a.id)
  }
}

const mutations = {
  addCard (state, payload) {
    state.cards.push(payload)
  },

  deleteCard (state, payload) {
    const indexToDelete = state.cards
      .findIndex(({ id }) => Number(id) === Number(payload))
    state.cards.splice(indexToDelete, 1)
  }
}

export default {
  state,
  getters,
  mutations
}
