import { store } from '../store/store'

export default (toolbar, from, next) => {
  if(store.getters.user) {
    next()
  } else {
    next('/login')
  }
}
