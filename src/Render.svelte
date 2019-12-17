<script>
  import { h } from './utils.js'

  export let component
  export let props = {}
  export let children = []

  $: normalizedChildren = component && children.map(child => {
    return typeof child === 'function' ? h(child) : child
  })
</script>

{#if component}
  <svelte:component this={component} {...props}>
    {#each normalizedChildren as child}
      <svelte:self {...child} />
    {/each}
  </svelte:component>
{/if}
