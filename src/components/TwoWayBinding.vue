<template>
<h1> Two Way Binding :- ek property ko model(script) and view(template) me bind kr dena</h1>
<input type="text" v-model="count" />
<h2>{{count}}</h2>
<p> how to get input field value </p>
<input type="text" placeholder= "enter email" v-model="email" />
<br />
<input type="text" placeholder="enter password" v-model="password" />
<br />

<button type="button" v-on:click="getData()"> Get Value </button>
<br />
<br />
<br />

<p>how to get checkBox and radio button value</p>
<h2> technology select </h2>
<label for ="java"> java</label>
<input type= "checkbox" value="java" id="java" v-model="technology" />

<label for ="VueJs"> VueJs</label>
<input type= "checkbox" value="VueJs" id="VueJs" v-model="technology" />

<label for ="Reactjs"> Reactjs</label>
<input type= "checkbox" value="Reactjs" id="Reactjs" v-model="technology" />

<label for ="node"> node</label>
<input type= "checkbox" value="node" id="node" v-model="technology" />
<h3> selected technology : {{technology}} </h3>

<p>Who i am (radio button)</p>
<label for="student"> Student </label>
<input type="radio" value="student" name="who" id ="student" v-model="who" />

<label for="developer"> developer </label>
<input type="radio" value="developer" name="who" id ="developer" v-model="who" />
<label for="artist"> artist </label>
<input type="radio" value="artist" name="who" id ="artist" v-model="who" />
<h4>who i am {{who}}</h4>
</template>


<script>
export default 
{
    name: 'TwoWayBinding',
    data(){
        return{
            email: null,
            password:null,
            count:10,
            //data for checkbox
            technology:[],
            who:null,
        }
    },
    methods:{
        getData()
        {
        console.log("value:", this.email, this.password);
            console.log("function call");
          }
            
       
    }
}

</script>