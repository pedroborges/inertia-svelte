<script>
  import { Inertia, page } from './'

  export let
    initialPage,
    resolveComponent,
    transformProps = i => i

  Inertia.init({
    initialPage,
    resolveComponent,
    updatePage: (component, props, { preserveState }) => {
      page.set({ component, props: transformProps(props) })
    },
  })
</script>

<svelte:component this={$page.component} {...$page.props} />
