import Vue from 'vue'


////////////////公用方法///////////





//插件库引入



//全局组件


import vfinger from 'v-finger-mk42';
Vue.use(vfinger);

const components = []
components.forEach(item=>{
	Vue.component(item.name,item)
})		





//导出对外方法
module.exports = {
	test:{}
}