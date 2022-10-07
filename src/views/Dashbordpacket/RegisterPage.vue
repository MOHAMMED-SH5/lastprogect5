<template>
    <b-container>
      <b-row>
          <b-col >
              <ValidationObserver v-slot="{ handleSubmit }">
              <form class="w-75 offset-2 mt-3" @submit.prevent="handleSubmit(onSubmit)">
                    <div>
                        <ValidationProvider class="mt-2" name="name" rules="required|alpha" v-slot="{ errors }">
                            <div class="lableform">
                                <label for="">{{$t('Name')}}</label>
                                </div>
                                <input class="form-control"  v-model="formdata.name"  type="text">
                                <div class="erorrmessage">{{ errors[0] }}</div>
                        </ValidationProvider>
                    </div>
    
                    <div class="mt-2">
                    <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                        <div class="lableform">
                            <label for="">{{$t('Email')}} </label>
                        </div>
                    <input class="form-control" v-model="formdata.email" type="email">
                    <div class="erorrmessage">{{ errors[0] }}</div>
                    </ValidationProvider>
                    </div>
                <ValidationObserver>

                <ValidationProvider   name="password" rules="required|min:6" v-slot="{ errors }" ref="password">
                    <div class="lableform">
                        <label for="">{{$t('password')}}</label>
                    </div>
                    <div class="d-flex">
                        <input class="form-control" :type="isTypePassword ? 'password' : 'text'" v-model="formdata.password" id="inputpassword" />
                        <b-input-group-text @click="isTypePassword = !isTypePassword">
                            <strong class="text-danger">

                                <!-- بلزمنا اسم الحقل يلي ابعت فيه الكونفيرميشن -->
                                <i :class="isTypePassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
                            </strong>
                        </b-input-group-text>
                    </div>
                    <div class="erorrmessage">{{ errors[0] }}</div>
                </ValidationProvider>

                <ValidationProvider name="confirm" rules="required|confirmed:password" v-slot="{ errors }">
                 <div class="lableform">
                    <label for="">{{$t('confirmpassword')}}</label>
                    </div>
                    <div class="d-flex">
                        <input  class="form-control" :type="isPassword ? 'password' : 'text'"   v-model="formdata.confirmation" id="inputpasswordtwo"  />
                        <span><b-input-group-text  @click="isPassword = !isPassword">
                            <strong class="text-danger">
                                <i  :class="isPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
                            </strong>
                            </b-input-group-text></span>
                    </div>
                    <div class="erorrmessage">{{ errors[0] }}</div>
                </ValidationProvider>

              </ValidationObserver>  
              <b-button class="Registerbutton w-100 mt-4 mb-4" type="submit"> Register now</b-button>
              </form>
            </ValidationObserver>
          </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
    import axios from "axios"
    export default {
    data: () => ({
            isTypePassword: true,
            isPassword:true,
            formdata:{
                name:'',
                email:'',
                password:'',
                confirmation:'',
                }
    }),
    methods: { 
        onSubmit () {
            axios.post("http://plattenapi.awtar-tech.com/api/vendors/register", this.formdata).then((response) => {
                // result of requst if requst suscces
                console.log(response);
                // result of requst status 
                console.log(response.status); 
            })
        },
    }
    }
  </script>
  
  