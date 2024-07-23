import { defineComponent, h, Fragment, PropType } from 'vue'

export const layoutProps = {
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: "medium"
  }
} as const

export const Layout = defineComponent({
  props: layoutProps,
  render() {
    return (
      <div>
        <h2>vue3 jsx</h2>
        <div>div元素rrr</div>
      </div>
    )
  }
})