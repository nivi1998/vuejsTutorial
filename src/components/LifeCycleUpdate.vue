<template>
<h1> BeforeUpdate and After Update(updated)</h1>
<p> BeforeUpdate:- when data is in loading phase </p>
<p>updated :- update the data 0 to 1 then it call </p>
<h1 ref="count">{{count}}</h1>
<button v-on:click="count= count + 1 ">update count </button>
</template>

<script>
export default{
    name: "LifeCycleUpdate",
    data(){
        return{
            count: 0
        }
    },

    beforeUpdate()
    {
        console.log("beforeupdate", this.$refs['count'].textContent);
    },
    updated(){
        console.log("after update", this.count);
    }
}
</script>