import { onBeforeUnmount, onMounted, ref } from 'vue'
export default function () {
	const x: any = ref(-1)
    const y: any = ref(-1)

    // 点击事件的回调函数
    const clickHandler = (event: MouseEvent) =>{
      x.value = event.pageX.toFixed()
      y.value = event.pageY.toFixed()
    //   console.log(x.value, y.value);
    }

    // 页面已经加载完毕了,在进行点击的操作
    // 页面加载完毕的生命周期
    onMounted(()=>{
      window.addEventListener('click', clickHandler)
    })
    // 页面卸载前的生命周期组合API
    onBeforeUnmount(()=>{
      window.removeEventListener('click', clickHandler)
	})
	return {
		x,
		y
	}
}