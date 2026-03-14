<!-- setup表示可以写vue3的组合式API -->
<script setup>

</script>

<template>
    <!-- template标签里面必须写一个根标签，其他标签都必须放在根标签里面，否则会报错 -->
    <div>
        <h1>关于</h1>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </div>
</template>


<style scoped></style>