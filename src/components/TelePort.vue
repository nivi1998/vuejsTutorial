<template>
<h1>TelePort:-any content we want to add after our main.js id then we use teleport.</h1>
<p>for eg:-suppose if we want to add static footer then we can create direct in html file after id.. then if we want to convert it to dynamic then we add teleport</p>
<p> we create one div after app div and add new id name. we can call that id in out component inside "teleport" tag to add in the created id </p>
<teleport to = "#footer"><TeleportFooter /></teleport>

</template>

<script>
import TeleportFooter from './TeleportFooter.vue'
export default{
    name:"TelePort",
    components:{
        TeleportFooter,
    }
}
</script>

