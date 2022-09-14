<template>
<div class="user">
<h1> {{data.name}} </h1>
<h1> {{data.email}} </h1>
<button v-on:click= "getAlertData(data.name)"> Alert Name</button>
</div>
</template>

<script>
export default {
    name: "ReuseComp",
    props:{
        data:Object,
        getAlertData:Function
    },
    
}
</script>

<style>
.user{
    background: skyblue;
    padding: 10px;
    border-bottom: 1px solid;
    margin-bottom: 20px;
}
</style>