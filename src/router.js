import Vue from 'vue'
import VueRouter from 'vue-router'
import PgDetail from '@/components/pgDetail'
import PgList from '@/components/pgList'
// import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PgList
  },
  {
    path: '/pokemon/:id',
    name: 'detail',
    component: PgDetail,
    props: true
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'detail') {
//     console.log(store.state)
//     const hasPokemon = store.state.pokemons.find(pokemon => pokemon.order === to.params.id)
//     if (!hasPokemon) {
//       next({ name: 'home' })
//       return
//     }
//   }
//   next()
// })

export default router
