<script>
  import Inertia from 'inertia'
  import page from './page'

  export let
    initialPage,
    resolveComponent,
    transformProps = props => props

  Inertia.init({
    initialPage,
    resolveComponent,
    updatePage: (component, props) => {
      page.set({ component, props: transformProps(props) })
    },
  })
</script>

<svelte:component this={$page.component} {...$page.props} />
