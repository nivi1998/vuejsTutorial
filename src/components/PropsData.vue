<template>

<h1>props:to transfer the data from parent to child or vice versa is called props</h1>
<p>send data from pareent to child </p>
<StudentProp name= "nivi" />
<p> pass data child to parent </p>
<TeacherProp :getUser="getUserName" />
</template>


<script>
import StudentProp from './StudentProp.vue'
import TeacherProp from './TeacherProp.vue'
export default{
    name: "PropsData",
    components:{
        StudentProp,
        TeacherProp,
    },
    data(){
        return{
             name:"nikk",
        }
       
    },
    // for calling child to parent
    // to make function in parent and pass to child
    methods: {
        getUserName(name) {
            alert(name)
        }
    }
}
</script>