<template>
<h1>{{profile}}'s Profile Page</h1>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
    name: "Profile",
    data(){
        return{
            profile:'',
        }
    },
    mounted()
    {
        const route = useRoute();
        console.log("route", route.params.name);
        this.profile=route.params.name;
    }
}
</script>