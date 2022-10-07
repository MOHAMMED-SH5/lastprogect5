<template>
  <div class="se-one">
    <div class="d-flex justify-content-center">
      <img class="img-man w-50  pt-2" src="@/assets/img/man.png" alt="">
    </div>
    <div class="p-4">
      <p class="welcome">{{ $t('welcome') }},</p>
      <p class="haneen">{{$t('HannenDH')}}</p>

      <router-link class="link-secone-tittel" to="/">{{ $t('Dashbord') }}</router-link>
      <router-link v-for="(item, index) in arrayDashbord" :key="`arrayDashbord-${index}`" class="link-secone pt-2" :to="item.router">{{ $t(item.tittel) }}</router-link>


      <router-link class="link-secone-tittel pt-4" to="/">{{$t('Acountsetting')}}</router-link>
      <router-link v-for="(item, index) in arrayAcountsetting" :key="`arrayAcountsetting-${index}`" class="link-secone pt-2" :to="item.router">{{ $t(item.tittel) }}</router-link>
    </div>
  </div>
</template>
  
<script>
export default
  {
    name: 'SecOne',
    data() {
      return {
        arrayDashbord: [
          {
            router: '/',
            tittel: "Dashbord"
          },
          {
            router: '/MyProfile',
            tittel: "myprofile"
          },
          {
            router: '/StaticPage',
            tittel: "StaticPage"
          },
          {
            router: '/CalendePage',
            tittel: "calender"
          },
          {
            router: '/MessagePage',
            tittel: "Message"
          },
          {
            router:'/FavoritePage',
            tittel: "Favorite"
          },
          {
            router: '/BlogPage',
            tittel: "Blog"
          },
          {
            router: '/CommunityPage',
            tittel: "community"
          },
          {
            router: '/RegisterPage',
            tittel: "RegisterPage"
          },
          {
            router: '/LoginPage',
            tittel: "LoginPage"
          }
          

        ],
        arrayAcountsetting: [
          {
            router: '/profileSetting',
            tittel: "profileSetting"
          },
          {
            router: '/WithdrawPage',
            tittel: "withdraw"
          },
          {
            router: '/LogOut',
            tittel: "logout"
          },
          {
            router: '/BecomeStudent',
            tittel: "BecomeAStudent"
          },
          {
            router: '/ForgetPasswotd',
            tittel: "ForgetPasswotd"
          }
        ]
      }
    }

  }
</script>
  
