<template>
<h1>Methods </h1>
<h2> Email : {{email}}</h2>
<h2> Name : {{getName("nikkkkk")}} </h2>
<h2> All Data: {{getdata()}}</h2>
<h2> All Data: {{getdata().name}}</h2>
<h2> All Data: {{getdata().email}}</h2>

</template>


<script>
export default {
    name : 'MethodUse',

    data(){
        return{
            email : "nivi123@gmail.com",
        }
    },
    methods: {
        getName(name)
        {
            return name;
        },
        getdata(){
            return{
                name: "nivi",
                email: this.email
            }
        }
    }
}
</script>