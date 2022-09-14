<template>
<h1>Computed Property :-we can use computed property same as data propertty(it is use for simple calculation. for eg:- 2+2) , but if we want to perform some logical or complex calculation then we use computed property.</h1>
<p>computed property are cached based on their reactive dependencies(we can use again and again cached value, no need to add value every time</p>
<p>we can use using method property  and normal templates expression for simple calculation, and where we want to solve complex problem then use computed property</p>
<p></p>
<h2>{{(dollers * rupeeVal) - discount}}</h2> <p>to repeat this calculation again and again we use computed property</p>
<h2>{{getResult}}</h2>
<h3>{{getResultmethod()}}</h3>
</template>

<script>
export default{
    name:"ComputedProperty",
    data(){
        return{
            dollers:100,
            rupeeVal:70,
            discount:10,
        }
    },
    methods:{
        getResultmethod(){
            return (this.dollers * this.rupeeVal) - this.discount;
        }
    },
    computed:{
        getResult(){
            return (this.dollers * this.rupeeVal) - this.discount;
        }
    }
}
</script>
