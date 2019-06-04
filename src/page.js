import { writable } from 'svelte/store'

const page = writable({
  component: null,
  props: {},
})

export default page