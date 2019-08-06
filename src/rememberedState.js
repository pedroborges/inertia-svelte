import Inertia from 'inertia'
import { onDestroy } from 'svelte'
import { writable } from 'svelte/store'

function rememberedState(initialState, key) {
    const store = writable(Inertia.restore(key) || initialState)
    const unsubscribe = store.subscribe(state => Inertia.remember(state, key))

    onDestroy(unsubscribe)

    return store
}

export default rememberedState