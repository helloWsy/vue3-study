<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name:{{ state.name }}</h3>
  <h3>age:{{ state.age }}</h3> -->

  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name:'App',
  setup() {
    const state = reactive({
      name: '自来也',
      age: 47,
    })

    // toRefs可以把响应式对象转换成普通对象,该普通对象的每个 property 都是一个ref
    const state2 = toRefs(state)
    // 定时器,更新数据,(如果数据变化了,界面也会随之变化,肯定是响应式的数据)
    setInterval(() => {
      state.name += '=='
      // state2.name.value += '$$'
      // 定时器触发了,但是由于...state的数据不是响应式的,所以name并不会改变
      console.log('*********');
    }, 1000)

    return {
      // state,
      ...state, // 不是响应式数据------> { name: '自来也', age: 47 }
      ...state2
    }
  }
})
</script>