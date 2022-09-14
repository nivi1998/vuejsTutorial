<template>
<h1 ref="user">LifeCycleUnmount user</h1>
</template>

<script>
export default {
    name: "LifeCycleUnmountUser",
    beforeUnmount(){
        console.log("beforeUnmount", this.$refs['user'])
    },
    unmounted(){
        console.log("mounted", this.$refs['user'])
    }
}
</script>