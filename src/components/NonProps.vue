<template>
<h1> Non Props Data : <p> we dont need to pass type of data in non-props </p></h1>
<p> we pass id in child components inside parents comp call to apply the id of child componets</p>
<p>parents div is necessary or if it is not define then we will use $attrs(attributes) to get the id</P>

<NonPropChild data="few data"  id="user-cmp"/>
</template>

<script>
import NonPropChild from './NonPropChild.vue'
export default{
    name:"NonProps",
    components:{
        NonPropChild,
    }
}
</script>