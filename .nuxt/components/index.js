export const DevicesChart = () => import('../../components/devices/Chart.vue' /* webpackChunkName: "components/devices-chart" */).then(c => wrapFunctional(c.default || c))
export const DevicesDatePick = () => import('../../components/devices/DatePick.vue' /* webpackChunkName: "components/devices-date-pick" */).then(c => wrapFunctional(c.default || c))
export const IndexEdit = () => import('../../components/index/Edit.vue' /* webpackChunkName: "components/index-edit" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
