<template>
    <h2>Test2</h2>
    <div>
        <slot name="default" :msg="data.msg"></slot>
    </div>
    <div>
        <slot name="item" :id="data.id"></slot>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

defineSlots<{
    default?: (props: { msg: string }) => any
    item?: (props: { id: number }) => any
}>()

const msg = ref('test2')
const id = ref(2)

const data = reactive({
    msg: "test2",
    id: 2222
})

</script>