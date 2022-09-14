<template>
<h1> Life cycle BeforeMount and After Mount(mounted) {{name}}</h1>
<p> when html part just start, then before it start it call</p>
<p> when template mount with components then it called(mounted)</p>
</template>

<script>
export default{
    name: "LifeCycleMount",
    data(){
        return{
            name: "nivi",
        }
    },
    beforeMount(){
        console.log("beforeMount", this.$el); //el means elements part(means html part)

    },
    mounted()
    {
        console.log("mounted", this.$el);
    }
}
</script>