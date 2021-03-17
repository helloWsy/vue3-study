<template>
<h2>shallowReactive和shallowRef</h2>
<h3>m1: {{m1}}</h3>
<h3>m2: {{m2}}</h3>
<h3>m3: {{m3}}</h3>
<h3>m4: {{m4}}</h3>
<button @click="update" >修改数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue'
export default defineComponent({
  name:'App',
  setup() {

    // shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式)
    // shallowRef: 只处理了value的响应式, 不进行对象的reactive处理

    // 什么时候用浅响应式呢?
    // 一般情况下使用ref和reactive即可
    // 如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    // 如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef

    // 深度劫持(深监视)----深度响应式
    const m1 = reactive({
      name: '小孟',
      age: 18,
      car: {
        name: 'audi',
        color: 'white'
      }
    })
    // 浅劫持(浅监视)----浅响应式
    const m2 = shallowReactive({
      name: '小孟',
      age: 18,
      car: {
        name: 'audi',
        color: 'white'
      }
    })
    // 深度劫持(深监视)----深度响应式----做了reactive的处理
    const m3 = ref({
      name: '小孟',
      age: 18,
      car: {
        name: 'audi',
        color: 'white'
      }
    })
    // 浅劫持(浅监视)----浅响应式
    const m4 = shallowRef({
      name: '小孟',
      age: 18,
      car: {
        name: 'audi',
        color: 'white'
      }
    })
    const update =()=>{
      // 更改m1的数据---reactive方式
      // m1.name += '==' // 修改了
      // m1.car.name += '==' // 修改了
      // 更改m2的数据---shallowReactive方式
      // m2.name += '**' // 修改了
      // m2.car.name += '**' // 单独使用不修改,和上一条语句同时使用可以修改
      // 更改m3的数据---ref方式
      // m3.value.name += '&&'  // 修改了
      // m3.value.car.name += '&&' // 修改了
      // 更改m4的数据---shallowRef方式
      m4.value.name += '&&'  // 没修改
      m4.value.car.name += '&&' // 没修改
      console.log(m3, m4)
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    }
  }
})
</script>
