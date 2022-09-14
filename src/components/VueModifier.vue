<template>
<p>Modifier:- if we want change the type in form or sometimes to changes the spaces etc. to control all this we use modifier. this is also called form modifier because we perform operation on input, select etc field.</p>
<p>.lazy is used if we want to print data after click enter </p>
<p>.trim is used if we want to remove unnecessary space if any user click </p>
<P>without typing anything it showing string, after data enter its show the data type </p>
<p> we can use multiple modifier in one time </p>
<input type="number" v-model.trim.lazy="data" />
<h3>Data is :{{typeof(data)}}</h3>
</template>

<script>
export default{
    name: "VueModifier",
    data(){
        return{
            data:''
        }
    }
}
</script>