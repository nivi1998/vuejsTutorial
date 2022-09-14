<template>
<h1> Life cycle Create phase(before created anf created) </h1>
<h2>{{name}}</h2>
</template>

<script>
export default{
    name : "LifeCycleCreate",
    data(){
       
            console.log("created11");
            return{
                name:"nivedita",
            }
       
    },
    beforeCreate()
    {
        //it call before properties define thats why it didnt change . because first run beforeCreate then data property define reads and then run created.
        this.name="nikk",
        alert("before created")
    },
    created()
    {
        this.name="singh",
        alert("created")
    }
}
</script>