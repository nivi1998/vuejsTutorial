<template>
<h1>Dynamic Components :- its means we have multiple components and we have to load one by one.</h1>
<p>for eg:- if we have 40 components and we have to call one by one then we cannot use if-else condition or switch- case.</p>
<p></p>

<button @click = "activeTab='ReactDynamic' ">Load React</button>
<button @click = "activeTab='PhpDynamic' ">Load Php</button>
<button @click = "activeTab='NodeDynamic' ">Load Node</button>

<component :is="activeTab" />
</template>



<script>
import ReactDynamic from './ReactDynamic.vue'
import PhpDynamic from './PhpDynamic.vue'
import NodeDynamic from './NodeDynamic.vue'
export default{
    name:"DynamicComp",
    components:{
        ReactDynamic,
        PhpDynamic,
        NodeDynamic

    },
    data(){
        return{
            activeTab:"ReactDynamic",
        }
    }
}
</script>