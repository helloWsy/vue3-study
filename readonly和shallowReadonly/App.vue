<template>
<h2>readonly和shallowReadonly</h2>
<h3>state: {{state2}}</h3>
<hr>
<button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent({
  name:'App',
  setup() {
    // readonly:
    // 深度只读数据
    // 获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。
    // 只读代理是深层的：访问的任何嵌套 property 也是只读的。
    
    // shallowReadonly:
    // 浅只读数据
    // 创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换
    // 应用场景:
    // 在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除
    const state = reactive({
      name: 'xm',
      age: 20,
      car: {
        name: 'audi',
        color: 'white',
      },
    })
    // 只读的数据---深度的只读
    // const state2 = readonly(state)
    // 只读的数据---浅只读的
    const state2 = shallowReadonly(state)
    const update = () =>{
      state2.car.name += '=='
    }
    return {
      state,
      update,
      state2,
    }
  }
})
</script>