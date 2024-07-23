<template>
    <div>
        <div>{{ foo }}</div>
        <div>{{ bar }}</div>
    </div>
    <button @click="handleClick()">change</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useVModel, useVModels } from '@vueuse/core'


export default defineComponent({
    props: {
        foo: String,
        bar: Number
    },
    setup(props, { slots, emit }) {
        const { foo, bar } = useVModels(props, emit)

        function handleClick() {
            foo.value = 'foo'
            bar.value = 100
            console.log(foo.value);
            console.log(bar.value);
        }

        return { foo, bar, handleClick }
    }
})

</script>