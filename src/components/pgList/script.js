import pgButton from '@/components/pgButton'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'pgList',
  components: { pgButton },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    getPokemons () {
      axios({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon',
        params: {
          offset: this.currentIndex
        }
      })
        .then(response => {
          const arrPromises = []
          const result = response.data.results
          this.$store.commit('SET_NUM_POKEMON', response.data.count)
          this.currentIndex += 20

          result.forEach(pokemon => {
            const promise = axios({
              method: 'GET',
              url: pokemon.url
            })
            arrPromises.push(promise)
          })
          Promise.all(arrPromises)
            .then(response => {
              response.forEach(pokemon => {
                this.setDetail(pokemon.data)
              })
            })
        })
    },
    goDetail (id) {
      this.$router.push({ name: 'detail', params: { id } })
    },
    setDetail (payload) {
      this.$store.commit('ADD_POKEMON', payload)
    }
  },
  computed: {
    ...mapGetters({
      pokemonsList: 'pokemons',
      numPokemons: 'numPokemons'
    })
  },
  mounted () {
    this.getPokemons()
  }
}
