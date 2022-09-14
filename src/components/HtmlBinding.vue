<template>
<h1>Html Binding :- when we have dynamic html tag(html tag is inside any variable or property) then how to use in our code</h1>
<h2>{{text}}</h2>
<div v-html="tag"></div>
<div v-html="tag2"> </div>


<p>we get the normal text</P>
</template>

<script>
export default{
    name: "HtmlBinding",
    data(){
        return{
            text:"Nivedita",
            tag:"<h1>hello Nivedita</h1>",
            tag2:"<h1>heyy Nivedita</h1>"
        }
    }
}
</script>