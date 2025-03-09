<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>

    <Layout size='medium'></Layout>
    <a-button @click="handleClick">Open Modal</a-button>
    <Test v-model:foo="foo" v-model:bar="bar"></Test>

    <Test2>
      <template v-slot:default="data">
        {{ data.msg }}
      </template>
      <template name="item" v-slot:item="data">
        {{ data.id }}
      </template>
    </Test2>

  </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, h, watch } from 'vue'
import { Modal } from '@arco-design/web-vue'
import Test from './components/Test1.vue';
import Test2 from './components/Test2.vue';
import { Layout } from 'lib'

const foo = ref('test')
const bar = ref(0)

function handleClick() {
  Modal.info({
    title: 'Info Title',
    content: () => h(Layout, {
      size: "medium"
    })
  })
}

watch(foo, (newValue) => {
  console.log("newValue foo", newValue);

})

watch(bar, (newValue) => {
  console.log("newValue bar", newValue);
})


</script>

<style scoped></style>
