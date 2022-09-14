<template>

<h1>when we didnt passs any value after calling child components then child components value is shown.(to define default value ) </h1>

<slot><h1>slot1</h1></Slot>
<div class="slot">
<header>
<slot name="header"></slot>
</header>
<content>
<slot name="content"></slot>
</content>
<footer>
<slot name="footer"></slot>
</footer>
</div>
</template>

<script>
export default {
    name: "ChildSlot",
    // props:{
    //     data:String
    // }
}

</script >

<style scoped>
.slot{
    border: 1px solid black;
    width: 200px;
    padding: 10px;
    text-align: center;
    background: aliceblue;
    margin-top: 10px;

}


</style>