<template>
  <h1>App父级组件</h1>
  <button @click="isShow = !isShow">点击切换显示状态</button>
  <hr>
  <Child v-if="isShow"/>
</template>
<script lang="ts">
// 引入子级组件Child
import Child from './components/Child.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name:'App',
  components: {
    Child,
  },
  setup() {
    const isShow = ref(false)

    return {
      isShow,
    }
  }
})
</script>