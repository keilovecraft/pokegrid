import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  numPokemons: 0,
  pokemons: []
}

const getters = {
  pokemons: state => state.pokemons,
  numPokemons: state => state.numPokemons
}

const mutations = {
  ADD_POKEMON (state, payload) {
    const model = {
      name: payload.name,
      image: payload.sprites.front_default,
      order: payload.order,
      images: payload.sprites,
      features: {
        abilities: {
          title: 'Abilities',
          items: []
        },
        base: {
          title: 'Base Experience',
          items: []
        },
        dimensions: {
          title: 'Height & Weight',
          items: [
            {
              label: 'Heigth',
              value: 0
            },
            {
              label: 'Weight',
              value: 0
            }
          ]
        },
        types: {
          title: 'Types',
          items: []
        },
        stats: {
          title: 'Stats',
          items: []
        },
        moves: {
          title: 'Moves',
          items: []
        },
        items: {
          title: 'Items',
          items: []
        },
        other: {
          double: true,
          items: [
            {
              title: 'Order',
              items: []
            },
            {
              title: 'Default',
              items: []
            }
          ]
        }
      }
    }

    // Set features values
    payload.abilities.forEach(item => {
      model.features.abilities.items.push(item.ability.name)
    })
    model.features.base.items.push(payload.base_experience)
    model.features.dimensions.items[0].value = payload.height
    model.features.dimensions.items[1].value = payload.weight
    payload.types.forEach(item => {
      model.features.types.items.push(item.type.name)
    })
    payload.stats.forEach(item => {
      const stat = {
        label: item.stat.name,
        value: item.base_stat
      }
      model.features.stats.items.push(stat)
    })
    payload.moves.forEach(item => {
      model.features.moves.items.push(item.move.name)
    })
    payload.held_items.forEach(item => {
      model.features.items.items.push(item.item.name)
    })
    model.features.other.items[0].items.push(payload.order)
    model.features.other.items[1].items.push((payload.is_default) ? 'Yes' : 'No')

    state.pokemons.push(model)
  },
  SET_NUM_POKEMON (state, num) {
    state.numPokemons = num
  }
}

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
