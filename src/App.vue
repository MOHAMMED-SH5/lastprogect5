<template>
  <div>
    <b-navbar  toggleable="md" type="dark" variant="">
    <div class="container">
    <b-navbar-brand href="#"><img class="logo img-fluid" src="@/assets/img/logo.png" alt=""></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item><router-link class="link" to="/">{{ $t('Dashbord') }}</router-link></b-nav-item>
        <b-nav-item><router-link class="link" to="/">{{ $t('Findstudent') }}</router-link></b-nav-item>
        <b-nav-item><router-link class="link" to="/">{{$t('Findtutors')}}</router-link></b-nav-item>
        <b-nav-item><router-link class="link" to="/">{{$t('traning')}}</router-link></b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="dropdownlink ms-auto">

        <b-nav-item-dropdown text="languge" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">Ar</b-dropdown-item> 
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{$t('HannenDH')}}</em>
          </template>
          <b-dropdown-item href="#">{{$t('Profile')}}</b-dropdown-item>
          <b-dropdown-item href="#">{{$t('SignOut')}}</b-dropdown-item>
        </b-nav-item-dropdown>

        <div class="locale-changer">
        <select class="form-select" v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>

      </b-navbar-nav>
    </b-collapse>
  </div>
  </b-navbar>
  <router-view/>
  
<div class="allsec">
  <div class="container">
      <div class="twoboxes row">
          <b-col md="3">
            <SecOne />
          </b-col>
          <b-col md="9">
            <SecTwo />
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
  import SecTwo from '@/components/SecTwo.vue'
  
  export default {
    name: 'HomeView',
    components: {
      SecOne,
      SecTwo
    },
    data () {
    return { langs: ['ar', 'en'] }
  }
  }
  </script>
  

