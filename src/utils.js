export const h = (component, props, children) => {
  if (props && Array.isArray(props) && !children) {
    children = props
    props = null
  }

  if (children && ! Array.isArray(children)) {
    children = [children]
  }

  return {
    component,
    ...(props ? { props } : {}),
    ...(children ? { children } : {})
  }
}
  