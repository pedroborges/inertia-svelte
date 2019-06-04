import Inertia from 'inertia'
import { onDestroy } from 'svelte'
import { writable } from 'svelte/store'

function rememberedState(initialState, key) {
    const restored = Inertia.restore(key)
    const store = writable(restored || initialState)

    const unsubscribe = store.subscribe(state => Inertia.remember(state, key))

    onDestroy(() => {
        unsubscribe()
    })

    return store
}

export default rememberedState