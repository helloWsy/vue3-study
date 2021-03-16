<template>
  <h2>reactive和ref的细节问题</h2>
  <h3>m1: {{m1}}</h3>
  <h3>m2: {{m2}}</h3>
  <h3>m3: {{m3}}</h3>
  <hr>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  name:'App',
  // 是Vue3的 compositon API 中2个最重要的响应式API(ref 和 reactive)
  // ref用来处理基本类型数据,reactive用来处理对象(递归深度响应式)
  // 如果用ref对象/数组,内部会自动将对象/数组转化为reactive的代理对象
  // ref内部: 通过给value属性添加getter/setter来实现对你数据的劫持
  // reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持,并通过Reflect操作对象内部数据
  // ref的数据操作: 在js中要 .value, 在模版中不需要(内部解析模版时会自动添加 .value)
  setup() {
    // 通过ref的方式设置的数据
    const m1 = ref('abc')
    const m2 = reactive({
      name: 'xw',
      wife: {
        name: 'xm'
      }
    })
    // ref也可以传入对象吗
    const m3 = ref({
      name: 'xw',
      wife: {
        name: 'xm'
      }
    })
    // 更新数据
    const update =()=>{
      // ref中如果放入的是一个对象,那么是经过了reactive的处理,形成了一个Proxy类型的对象
      console.log('m2----->', m2)
      console.log('m3----->', m3)
      m1.value += '==='
      m2.wife.name += '==='
      // m3.value.name += '==='
      m3.value.wife.name += '==='
    }
    return {
      m1,
      m2,
      m3,
      update
    }
  }
})
</script>