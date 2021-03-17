<template>
  <h2>App父级组件:Suspense组件的使用</h2>
  <Suspense>
      <template #default>
        <!-- 异步组件 -->
        <!-- <AsyncComponent></AsyncComponent> -->
        <AsyncAddress></AsyncAddress>
      </template>
      <template v-slot:fallback>
        <!-- loading的内容 -->
        <h2>Loading....</h2>
      </template>
  </Suspense>
</template>
<script lang="ts">
// 动态组件引入需要 defineAsyncComponent
import { defineComponent, defineAsyncComponent } from 'vue'
// 引入组件:静态引入和动态引入

// Vue2中的动态引入组件的写法(在Vue3中这种写法不行)
// const AsyncComponent =()=>import('./components/AsyncComponent.vue')

// Vue3中的动态引入组件的写法
// const AsyncComponent = defineAsyncComponent(()=>import('./components/AsyncComponent.vue'))

// 静态引入组件的写法
// import AsyncComponent from './components/AsyncComponent.vue'
import AsyncAddress from './components/AsyncAddress.vue'
export default defineComponent({
  name:'App',
  components: {
    // AsyncComponent
    AsyncAddress
  }
})
</script>