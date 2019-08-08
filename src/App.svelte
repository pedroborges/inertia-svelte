<script>
  import Inertia from 'inertia'
  import store from './store'

  export let
    initialPage,
    resolveComponent,
    transformProps = props => props

  Inertia.init({
    initialPage,
    resolveComponent,
    updatePage: (component, props) => {
      store.set({ component, props: transformProps(props) })
    },
  })
</script>

<svelte:component this={$store.component} {...$store.props} />
