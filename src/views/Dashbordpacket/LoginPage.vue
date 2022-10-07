<template>
    <b-row>
       <b-col>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form class="w-75 offset-2 mt-3" @submit.prevent="handleSubmit(onSubmit)">
                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                  <label for="">{{$t('Email')}}</label>
                  <input  class="form-control"   type="email"  v-model="loginobject.email">
                  <div class="erorr">{{ errors[0] }}</div>
                </ValidationProvider>

                <ValidationProvider   name="password" rules="required|min:5" v-slot="{ errors }" ref="password">
                  <label for="">{{$t('password')}}</label>

                    <input  class="form-control"  type="password"  v-model="loginobject.password">

                    <div class="erorr">{{ errors[0] }}</div>
                </ValidationProvider>
                <b-button class="Registerbutton w-100 mt-4 mb-4" type="submit" >login page</b-button>
                <button v-on:click="functionName(x,4)">Say Hi</button>
            </form>
          </ValidationObserver>
       </b-col>
    </b-row>
</template>
  

  <style>
    .erorr
    {
      color: red;
    }
 
  </style>
  <script>
    import axios from 'axios';
    import { mapMutations } from 'vuex';

  export default {
    data: () => ({
      x:[1,2,3,4,5,6,7],
      loginobject:{
        email:null,
        password:null
      }
    }),
    methods: {
      ...mapMutations(["setUserDetails"]),
      onSubmit () {
        // post requst api
        axios.post("http://plattenapi.awtar-tech.com/api/vendors/login", this.loginobject).then((response) => {
          this.setUserDetails(response.data.data)
        })
      },
      functionName(x, findnum){
        console.log(`The index is: ${x.findIndex((item) => item === findnum)}`)
      }
    }
          
  };
  </script>

  