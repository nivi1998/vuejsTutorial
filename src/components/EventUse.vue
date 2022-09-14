<template>
<h1>How to use Events in Vue </h1>
<button v-on:click="getData('button 1 clicked')"> click me </button>
<p> how to use double click </p>
<button v-on:dblclick="getData('button double clicked')"> click me </button>
<h1>on mouse over</h1>
<h1 v-on:mousemove="getConsole()">mouse over </h1>
<h1>how to change property value on button click </h1>
<h2>{{count}}</h2>
<button v-on:click = getCount()> count </button>
</template>


<script>
export default {
    name : "EventUse",
    data()
    {
        return {
            count:0
        }
    },
    methods:{
        getData(data)
        {
            
            alert(data);
        },
        getConsole()
        {
            console.log("function call");
        },
        getCount(){
            this.count = this.count+1;
        }
    }
}
</script>
