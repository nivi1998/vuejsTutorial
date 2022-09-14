<template>
<h1>Hello Home Page</h1>

<p> To use javascript function inside html is called interpolation</p>
<h2> how to use interpolation {{10+10}} </h2>
<h2> without interpolation 10+10 </h2>
<h3>check string length{{"hello".length}}</h3>
<p>to show script tag data inside html</p>
<p>create data function inside script and then access in html</p>
<h4>Email {{email}}</h4>
<h4>Mobile {{mobile}}</h4>
<h4> Name {{getName("singh")}} </h4>
</template>

<script>
export default {
    name: 'HomeHello',
    data(){
        return {
            email: 'nivi@gmail.com',
            mobile:990900,
            getName: function (a)
            {
                return a;
            }
        }
    }
    
}
</script>

<style scoped>

</style>