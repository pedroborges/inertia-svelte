import { writable } from 'svelte/store'

const store = writable({
  component: null,
  props: {},
})

export default store