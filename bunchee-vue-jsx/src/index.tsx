import { defineComponent, h, Fragment, PropType } from 'vue'

export const layoutProps = {
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: "medium"
  }
} as const

export const Layout = defineComponent({
  props: layoutProps,
  setup(props, { slots, attrs, emit }) {
    const defaultSlot = slots.default

    return () => {
      return (
        defaultSlot ? (
          <div>
            <h2>Layout Component</h2>
            {defaultSlot()}
          </div>
        ) : <span>default slot is empty</span>

      )
    }
  }
})