<template>
<h1>if else condition </h1>
<h2 v-if="show">If Condition</h2>
<h2 v-else>Else Condition </h2>

<button v-on:click="show = !show "> Toggle </button>
<br /> <br /> 
<p>on button click apply if else(show and hide)</p>
<h3 v-if="show2" >show/hide the text on button click</h3>
 <button v-on:click="show2 = !show2 "> Toggle </button>

 <br /> <br /><br /> <br />

 <h1>For Loop</h1>
 <ul>
 <li v-for="item in technology" :key="item">
 {{item}}
 </li>
 </ul>
 <br />
 <ul>
 <li v-for="item in user" :key="item.email">
name is : {{item.name}} and email is : {{item.email}}
 </li>
 </ul>

</template>

<script>
export default{
    name: "ConditionalRendering",
    data(){
        return{
            //if else data
            show:false,
             show2:true,

            //loop data
             technology:['java', 'php', 'node', 'html'],
             user:[
                {
                    name:"nivi",
                    email:"nivi@gmail.com",
         },
          {
                    name:"nikk",
                    email:"nikk@gmail.com",
         },
         {
                    name:"singh",
                    email:"singh@gmail.com",
         },
         {
                    name:"niv",
                    email:"niv@gmail.com",
         },
         ]
        }
    }
}
</script>