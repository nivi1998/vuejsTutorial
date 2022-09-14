<template>
<h1>beforeUnmount and after unmounted :- when data remove from dom then it call</h1>
<h2>to speed up(or enhance the performance of application) our application we use this</h2>

<button v-on:click="show=!show">Toggle</button>

<LifeCycleUnmountUser v-if="show" />
</template>

<script>
import LifeCycleUnmountUser from './LifeCycleUnmountUser.vue'
export default{
    name:"LifeCycleUnmount",
    components:{
        LifeCycleUnmountUser,
    },
    data(){
        return{
            show: true,
        }
    }
}
</script>