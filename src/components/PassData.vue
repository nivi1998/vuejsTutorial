<template>
<h1> pass data parents to child components </h1>

<ChildComp name="nivedita" :user="user" :getData="getData" />
<br /><br />

<p>reuse comp </p>
<ul>
<li v-for="item in data" :key="item.name">
<ReuseComp :data="item" :getAlertData="getAlertData" />


</li>
</ul>

</template>

<script>
import ChildComp from './ChildComp.vue'
import ReuseComp from './ReuseComp.vue'
export default{
    name: "PassData",
    //define components
    components:{
        ChildComp,
        ReuseComp
    },
    data(){
        return{
            user: {
            name:"nivi", 
            email: "email@gmail.com",
        },
        data:[
            {
                name:"hello",
                email:"hello@test.com"
            },
            {
                name:"hii",
                email:"hii@test.com"
            },
            {
                name:"bye",
                email:"bye@test.com"
            },
            {
                name:"hey",
                email:"hey@test.com"
            }

        ]

        }
        
    },
    //define function
    methods: {
        getData()
        {
            console.log("parent function call")
            alert("hello parent function")
        },

       
        getAlertData(name){
            alert(name);
        }
   

    }
}
</script>