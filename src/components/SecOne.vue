<template>
        <div class="se-one">
          <div class="d-flex justify-content-center">
                <img class="img-man w-50  pt-2" src="@/assets/img/man.png" alt="">
          </div>
          <div class="ms-5 pt-3">
            <p class="welcome">{{ $t('welcome') }},</p>
            <p class="haneen">{{$t('HannenDH')}}</p>
            <router-link class="link-secone-tittel" to="/">{{ $t('Dashbord') }}</router-link>
            <router-link class="link-secone" to="/">{{ $t('Dashbord') }}</router-link>
            <router-link class="link-secone" to="/">{{$t('myprofile')}}</router-link>
            <router-link class="link-secone" to="/">{{$t('statistics')}}</router-link>
            <router-link class="link-secone" to="/">{{$t('calender')}}</router-link>
            <router-link class="link-secone" to="/">{{$t('Message')}}</router-link>

            <router-link class="link-secone-tittel" to="/">{{$t('Acountsetting')}}</router-link>
            <router-link class="link-secone" to="/">{{$t('profileSetting')}}</router-link>
            <router-link class="link-secone" to="/">{{$t('withdraw')}}</router-link>
            <router-link class="link-secone" to="/">{{$t('logout')}}</router-link>
            <router-link class="link-secone" to="/">{{$t('BecomeAStudent')}}</router-link>
          </div>
        </div>
  </template>
  
  <script>
  export default 
  {
    name: 'SecOne'
  }
  </script>
  
