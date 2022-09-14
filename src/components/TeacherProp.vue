<template>
<p>child comp</p>
<p>TeacherProp data using prop </p>

<p> send user name to parent class </p>
<button v-on:click="getUser(userName)" > pass data to parent </button>
</template>


<script>
export default{
    name: 'TeacherProp',
    props:{
        // name: String,
        getUser: Function,
    },
    data(){
        return{
            userName: "God"
        }
    },
}
</script>