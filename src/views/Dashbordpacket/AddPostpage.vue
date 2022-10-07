<template>
    <div>
        <p class="Addpost mt-3">{{$t('Addpost')}}</p>
        <b-row>
            <b-col lg="12">
                <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                     <ValidationProvider name="Tittel name" rules="required|alpha" v-slot="{ errors }">
                        <label  class="tittlename mt-3" for="">{{$t('TittleName')}}</label>
                        <input class="tittelname form-control" v-model="postarray.Tittelname" type="text"  placeholder="Enter Tittel Name">
                        <div class="erorrmessage">{{ errors[0] }}</div>
                     </ValidationProvider>
                    <ValidationProvider name="tittelattical" rules="required|min:5" v-slot="{ errors }">
                        <p class="tittlename mt-2">{{$t('ArticalName')}}</p>
                        <div class="d-flex justify-content-start ">
                            <div class="me-2 mt-2 mb-2" v-for="(item, index) in arraypost" :key="index">
                            <i :class="item.iconpost" />
                        </div>
                        </div>
                        <textarea class="tittelattical form-control mt-2 mb-2" v-model="postarray.tittelattical" type="text" placeholder="Enter Tittel Artical"></textarea>
                        <div class="erorrmessage">{{ errors[0] }}</div>
                    </ValidationProvider>
                    <div  class="tittlename mt-3 mb-3" for="">{{$t('image')}}</div>
                    <div class="img-post p-2">
                        <div class="d-flex">
                            <div class="pt-2">
                                <div class="circleimg" >
                                    <i  class="fa-solid fa-image"></i>
                                </div>
                            </div>
                            <div class="ms-2">
                                <p class="picturep">picture</p>
                                <p class="picturep">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="Submitpost mt-3 mb-3" type="submit">Send to approve</button>
                    </div>
                </form>
            </ValidationObserver>
            </b-col>
        </b-row>
</div>
</template>


<script>
export default {
  data: () => ({
        postarray: 
        {
            Tittelname: null,
            tittelattical: null,
        },
         arraypost: [
            {
                iconpost: "fa-solid fa-bold"
            },
            {
                iconpost: "fa-solid fa-italic"
            },
            {
                iconpost: "fa-solid fa-underline"
            },
            {
                iconpost: "fa-solid fa-link"
            },
            {
                iconpost: "fa-regular fa-image"
            },
            {
                iconpost: "fa-solid fa-align-left"
            },
            {
                iconpost: "fa-solid fa-align-center"
            },
            {
                iconpost: "fa-solid fa-align-right"
            },
            {
                iconpost: "fa-solid fa-align-left"
            },
            {
                iconpost: "fa-solid fa-align-center"
            },
            {
                iconpost:"fa-solid fa-align-justify"
            }
      ]
  }),
  methods: {
    onSubmit () {
      console.log(this.postarray.Tittelname)
      console.log(this.postarray.tittelattical)
    }
  }
};
</script>