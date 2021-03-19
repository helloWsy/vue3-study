## 遇到的问题

### less版本错误

在`<style lang="less" type="text/less"></style>`中使用`lang="less"`报错
错误信息：
```text
ERROR  Failed to compile with 1 error    下午2:30:11

error  in ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less

Syntax Error: TypeError: this.getOptions is not a function
```

错误原因：
less 版本过高，使用的是如下版本的less
"less": "^4.1.1",
"less-loader": "^8.0.0",

解决办法：
在`package.json`中将`less-loader`降低到7.0.0版本后重新安装

### v-model子组件传父组件错误
在视频中的写法是`<input type="checkbox" v-model="todo.isCompleted" />`报错

错误信息：
```
error  in ./src/components/Item.vue

Module Error (from ./node_modules/eslint-loader/index.js):

/Users/wsy/code/02_Vue3/vue3_study/src/components/Item.vue
  4:36  error  Unexpected mutation of "todo" prop  vue/no-mutating-props
```

错误原因：
vue 中不允许子组件通过v-medal向父组件传值（单向数据流）

解决办法：
1:将`v-model`改为`:checked` 来判断checkbox的选中状态
2:在父组件定义方法，在子组件中调用父组件的方法来修改数据

### eslint语法检查报错
错误信息：
```  
  19:15  error  Parsing error: Unexpected token, expected ","

   7 |   props: {
   8 |     todo: {
>  9 |          type: Object as ()=>Todo, // 函数返回的是Todo类型
     |                       ^
  10 |          required: true
  11 |  },
  12 |  deleteTodo: {
```

错误原因：
不明

解决办法：
不影响程序的运行,直接在`.eslintignore`文件中忽略该组件`src/components/Item.vue`