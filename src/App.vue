<template>
  <div>
    <b-navbar  toggleable="md" type="dark" variant="">
      <div class="container">
        <b-navbar-brand href="#"><img class="logo img-fluid" src="@/assets/img/logo.png" alt=""></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">

        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto">
            <b-nav-item><router-link class="link" to="/">{{ $t('Dashbord') }}</router-link></b-nav-item>
            <b-nav-item><router-link class="link" to="/">{{ $t('Findstudent') }}</router-link></b-nav-item>
            <b-nav-item><router-link class="link" to="/">{{$t('Findtutors')}}</router-link></b-nav-item>
            <b-nav-item><router-link class="link" to="/">{{$t('traning')}}</router-link></b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav class="dropdownlink ms-auto">

            <!-- <b-nav-item-dropdown right>
              <template #button-content>
                <em>{{$t('HannenDH')}}</em>
              </template>
              <b-dropdown-item href="#">{{$t('Profile')}}</b-dropdown-item>
              <b-dropdown-item href="#">{{$t('SignOut')}}</b-dropdown-item>
            </b-nav-item-dropdown> -->
   
            <b-dropdown text="HannenDH">
            <b-dropdown-item href="#">{{$t('Profile')}}</b-dropdown-item>
            <b-dropdown-item href="#">{{$t('SignOut')}}</b-dropdown-item>
          </b-dropdown>

            <b-dropdown id="dropdown-1" text="Language" class="langc m-md-2" v-model="$i18n.locale">
              <b-dropdown-item @click="changeLang(lang)" v-for="(lang, i) in langs" :key="`Lang${i}`"> {{ lang }} </b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  
<div class="allsec">
  <div class="container">
      <div class="twoboxes row">
          <b-col class="s-one" sm="5"  md="3" lg="2">
            <SecOne />
          </b-col>

          <b-col class="s-two"  sm="7"  md="9" lg="10">
            <div class="se-two p-2">
              <router-view/>
            </div>
          </b-col>
      </div>
  </div>
</div>
  </div>

</template>

<style lang="scss">
  @import "@/assets/sass/style.scss";
  
</style>


<script>
  import SecOne from '@/components/SecOne.vue'
  
  export default {
    name: 'HomeView',
    components: {
      SecOne,
    },
    data () {
    return { langs: ['ar', 'en'] }
  },
  methods: {
    changeLang(newLang) {
      console.log(newLang, this);
      this.$i18n.locale = newLang

    }
  }
  }
  </script>
  

