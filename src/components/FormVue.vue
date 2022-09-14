<template>
<h1>How to create form in vue </h1>

<ul>
<li v-for="item in error" v-bind:key ="item" >
{{item}} not valid </li>
</ul>
<form>
<label>Email:</label>
<input type="text" placeholder="enter your email" v-model="form.email" />
<br /> <br />
<label>Password:</label>
<input type="text" placeholder="enter your password" v-model="form.password" />
<br /> <br />
<select v-model="form.country">
<option>India</option>
<option>USA</option>
<option>Swis</option>
</select>
<br />
<br />
<h3>Technology </h3>
<label>React Js</label>
<input type="checkbox" value="react" v-model="form.technology" />
<br /> <br />
<label>Vue Js</label>
<input type="checkbox" value="vue" v-model="form.technology" />
<br /> <br />
<label>Javascript</label>
<input type="checkbox" value="js" v-model="form.technology" />
<br /> <br />

<h3>Gender:</h3>
<label>Male</label>
<input type="radio" value="male" name="gender" v-model="form.gender" />
<br /> <br />
<label>female</label>
<input type="radio" value="female" name="gender" v-model="form.gender" />
<br /> <br />


<button v-on:click="login"> Login </button>
  </form>  
</template>

<script>
export default{
    name: "FormVue",
    data(){
        return{
            form:  {
                email: '',
                password:'',
                country: '',
                technology: [],
                gender: '',
            },
            error: [],
        }
    },
    methods: {
        login() {
            this.error = [];
            for(const item in this.form)
            {
                if(this.form[item] === "" || this.form[item].length === 0)

                {
                    this.error.push(item)
                }        
            }
                if(this.error.length === 0){
                alert("data has been submitted")
                }
            console.log("login Data" , this.form, this.error)
         }
    }
}

</script>