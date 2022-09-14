<template>
<div>
<h3 v-bind="$attrs">peter</h3>
<h3>nikk</h3>
</div>
</template>

<script>
export default{
    name:"NonPropChild",
    // inheritAttrs:false,
    props: {
        data: String, //using props
        id:String, //we can convert non proops into props adding id instead of data
    
    }
}
</script>