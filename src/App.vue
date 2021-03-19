<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :add-todo="addTodo" />
      <List :todos="todos" :delete-todo="deleteTodo" :update-todo="updateTodo" />
      <Footer :todos="todos" :check-all="checkAll" :clear-all-completed-todos="clearAllCompletedTodos" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import Header from './components/Head.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
// 引入接口
import { Todo } from './types/todo'
import { saveTodos, readTodos } from './utils/localStorageUtils'
export default defineComponent({
  name: 'App',
  // 注册组件
  components: {
    Header,
    List,
    Footer
  },
  // 数据应该用数组来存储,数组中的每个数据都是一个对象,对象中应该有三个属性(id, title, isCompleted)
  // 把数组暂且定义在App.vue父级组件
  setup() {
    // 定义一个数据数据
    // const state = reactive<{todos: Todo []}> ({
    //   todos: [
    //     { id: 1, title: '奔驰', isCompleted: false },
    //     { id: 2, title: '宝马', isCompleted: true },
    //     { id: 3, title: '奥迪', isCompleted: true }
    //   ]
    // })
    const state = reactive<{todos: Todo []}>({
      todos: []
    })
    // 界面加载完毕后过了一会再读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos()
      }, 1000)
    })
    // 添加数据的方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }
    // 删除数据的方法
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }
    // 修改todo的状态
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted
      console.log(todo)
    }
    // 全选或者是全不选的方法
    const checkAll = (isCompleted: boolean) => {
      // 遍历数组
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted
      })
    }
    // 清除所有选中的数据
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter(todo => !todo.isCompleted)
    }
    // 监视操作:如果todos数组的数据变化了,直接存储到浏览器的缓存中
    // watch(()=>state.todos, (value)=>{
    //   // 保存到浏览器的缓存中
    //   localStorage.setItem('todos_key', JSON.stringify(value))
    // },{deep: true})
    watch(() => state.todos, saveTodos, { deep: true })

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos
    }
  }
})
</script>
<style lang="less" type="text/less">
.todo-container {
  width: 600px;
  margin: 0 auto;
  .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}
</style>
