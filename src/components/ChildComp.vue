<template>
<h2>  child components {{name}} </h2>
<h3> {{user.name}}</h3>
<button v-on:click="getData()"> call parent function</button>
</template>

<script>
export default {
    name: "ChildComp",
    props:{
        name:String,
        user:Object,
        getData:Function
    }
}
</script>