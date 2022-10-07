<template>
    <b-row>
        <div class="boxfoegetpassword">
            <h3 class="forget ms-5 mt-3">{{$t('forgetPassword')}}</h3>
             <div class="text-center mt-3">
                <div class="circlepaper">
                    <i class="fa-solid fa-paper-plane "></i>
                </div>
                <div class="verifactiontwo">
                    <div class="pt-1">the code containg 6 numbers has been sent to your email</div>
                    <div class="pt-1"><span class="emailtags">example@gmail.com </span> to vaerity that you are tyring
                        to change you password </div>
                    <div class="pt-4 sendveraction">sent the verifaction code again</div>
                </div>
                <div class="d-flex justify-content-center">
                    <ValidationProvider name="number" class="ms-2 mt-3" rules="required|integer" v-for="(item, index) in arrayform" :key="index">
                        <input class="inputveraction" v-model="item.value" ref="inputnumber" type="number" @keyup="setFocus(index)" >
                    </ValidationProvider>
                </div>
                <b-button  @click="verity"  class="verity mt-4">verity</b-button>                
            </div>
        </div>
    </b-row>
</template>

<script>
    import axios  from 'axios';
export default {
    data() {
        return {
            arrayform: [
                {
                    value: ""
                },
                {
                    value: ""
                },
                {
                    value: ""
                },
                {
                    value: ""
                },
                {
                    value: ""
                },
            ]
        }
    },  
    methods:{
        setFocus(index) {
            if (index < this.arrayform.length - 1) this.$refs.inputnumber[index + 1].focus();
        },
        verity() {
            // get data from input and to gather in line 
            var total = "";
            this.arrayform.forEach((x) => total += x.value)
            total = parseInt(total);
            console.log(total)
            // requst response 
            axios.post("http://plattenapi.awtar-tech.com/api/vendors/login", this.arrayform).then((response) => {
            console.log(response.status); 
        })

        },
    },

}
</script>
