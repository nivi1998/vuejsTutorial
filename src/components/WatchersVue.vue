<template>
<h1>Watchers:-<p>it observe data property, if there is any changes in that it call the fuction.</p></h1>
<p>property name and watcher name are same</p>
<h2>{{count}}</h2>
<button v-on:click = "count = count + 1"> + </button>
<button v-on:click = "count = count - 1"> - </button>

<h1>Slot:- <p> its a type of components. when we use components then we only reuse one type of data type. </p></h1>
<p> for eg:- suppose we have dynamic data  and every time we have to pass different data types (array, object, json, image  etc) and also render in child components. for that we use slots</p>


<ChildSlot> <h1> here start use of slots </h1> </ChildSlot>
<ChildSlot> <a href="#">here start use of slots </a> </ChildSlot>
<ChildSlot> <img src="https://images.unsplash.com/photo-1543574687-5209713c0e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTI2NDA0NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=420&q=60" /> </ChildSlot>
<h1>multiple slot</h1>
<ChildSlot> 
<h1>nivi</h1> 
<button>buy now</button>
</ChildSlot>

<ChildSlot>
<template v-slot:header><h1>Nivi</h1></template>
<template v-slot:content><p >A vue js tutorial</p></template>
<template v-slot:footer><button > Add </button></template>
</ChildSlot>

</template>

<script>
import ChildSlot from './ChildSlot.vue'
export default{
    name:"WatchersVue",
    components:{
        ChildSlot
    },
    //data property
    data(){ 
        return{
            count:0,
        }

    },
    watch:{
        count(val, preVal){
            
            if(val>5 && val>preVal){
                // alert("Stop count");
                this.count=0
            }
        }
    }
}
</script>