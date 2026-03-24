<script setup>

import { ref, reactive } from 'vue'

// let obj1 = reactive({
//     name: '张三',
//     age: 18
// })
//ref用来定义数据
//count是一个响应式数据，初始值为0
let count = ref(0)
let str = ref('hello world')
let obj = ref({
    name: '张三',
    age: 18
})
let arr = ref([1, 2, 3])
let bool = ref(true)
let nll = ref(null)
let undef = ref(undefined)
let data = ref({
    name: '张三',
    age: 18,
    avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
})
let add = () => {
    //count.value是ref定义的响应式数据，使用.value来访问和修改它的值
    //标签内不用.value
    count.value++
}



</script>

<template>
    <div>
        {{ count }}
        {{ str }}
        {{ obj }}
        {{ obj.age }}
        {{ arr }}
        {{ bool }}
        {{ nll }}
        {{ undef }}
        <!-- @click点击事件 -->
        1111
        <el-button :a="count" type="primary" @click="add()">Primary</el-button>
        <img :src="data.avatar" alt="">
        <div>
            <div v-if="false">钱钱钱钱钱钱</div>
            <!-- <div v-else>没有钱钱钱钱钱钱</div> -->
        </div>
        <div>
            <div v-show="false">121111111111</div>
        </div>

        <div v-for="value in [1, 2, 3, 4, 5]" :key="value">
            {{ value }}
        </div>

    </div>
</template>

<style scoped></style>