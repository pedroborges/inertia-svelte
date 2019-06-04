import { derived } from 'svelte/store'
import page from './page'

const pageProps = derived(page, $page => $page.props)

export default pageProps
