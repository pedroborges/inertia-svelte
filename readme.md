# Inertia.js Svelte Adapter

Visit [inertiajs.com](https://inertiajs.com/) to learn more.

## Persistent layout

```diff
import { InertiaApp } from '@inertiajs/inertia-svelte'

const app = document.getElementById('app')

new InertiaApp({
  target: app,
  props: {
    initialPage: JSON.parse(app.dataset.page),
    resolveComponent: name =>
+      import(`@/Pages/${name}.svelte`),
-      import(`@/Pages/${name}.svelte`).then(module => module.default),
  },
})
```

Page component:

```svelte
<script context="module">
  import Layout from '@/Shared/Layout.svelte'
  export const layout = (h, page) => h(Layout, { title: 'Homepage' }, [page])
  // export const layout = (h, page) => h(Layout, [page])
  // export const layout = Layout
</script>

<script>
  // regular script block
```