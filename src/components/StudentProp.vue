<template>
<p>Student data using prop </p>
<p> student Name is : {{name}} </p>
</template>


<script>
export default{
    name: 'StudentProp',
    props:{
        name:String
    }
}
</script>