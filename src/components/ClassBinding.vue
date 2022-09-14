<template>
<h1>(Css binding)ClassBinding: some times we need to add dynamic classes in our element. (for eg, after button click color change etc)</h1>
<h2 class="otherClass" :class="applyStyle">Class components</h2>
<p>on click on button it changes the classes </p>
<button v-on:click="colorfull =!colorfull">Apply Style</button>

<h1>Props</h1>
</template>


<script>
export default{
    name: "ClassBinding",
    data(){
        return{
            colorfull:true,
        }
    },
    computed: {
        applyStyle(){
            return{
               
               green:this.colorfull,
               err:true,
               other:true,
              
            }
        }
    }
}
</script>

<style scoped>
h2 {
    color:green
}
.green{
    background:yellow;
    width:200px;
    padding:10px;
}
.err{
    color:red;
}
.other{
    font-size:30px;
}
</style>