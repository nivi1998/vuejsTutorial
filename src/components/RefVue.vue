<template>
<h1>Ref is use to get or set the value of DOM </h1>
<p>for eg:- if e want to get the form value or set the style value we can use ref</p>
<p>we can use multiple refs inside one components </p>
<input type="text" ref="input" />
<button v-on:click="getData"> Click me </button>
</template>


<script>
export default {
    name: "RefVue",
    methods:{
        getData(){
            this.$refs.input.focus();
            console.log("hello ref")
            let val = this.$refs.input.value;
            this.$refs.input.style.color="red";
            console.log(val)

        }
    }
}
    
</script>