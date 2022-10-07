<template>
    <div class="pt-3">
      <h3 class="Dashbord ms-2">{{$t('Dashbord')}}</h3>
      <div class="row p-2 pt-3">
        <b-col class="mb-3" lg="4" v-for="(item, index) in arraybox" :key="index">
          <div class="boxone">
            <div class="d-flex justify-content-between p-2">
              <div>
                <p class="Total">{{ $t(item.Total) }}</p>
                <p class="number">{{item.number}}</p>
              </div>

              <i :class="item.icon" />
            </div>
          </div>
        </b-col>
      </div>
      <div class="notification-sec me-1 ms-2">
        <div class="row pt-4 pb-5">
          <b-col lg="8" class="sec-navgection mt-3">
            <div class="pt-1 pb-2">
              <p class="notification  pt-2 pb-2">{{$t('Notification')}}</p>

              <div v-for="(item, index) in 6" :key="index">
                <span class="circle p-1">
                  <i class="fa-solid fa-star "></i>
                </span>
                <span class="starph ms-2">
                  you got a 4.5 stars and a new review on class <a class="likndash" href="">class name</a> from students
                  <a class="likndash" href="">click here</a>
                </span>
                 <div class="Mins pt-2 pb-3">05 Mins Ago</div>
              </div>
            </div>
          </b-col>
          <b-col lg="4">
            <template class="w-75">
              <b-calendar
                  selected-variant="success"
                  today-variant="info"
                  nav-button-variant="primary"
                 
              ></b-calendar>
          </template>
            <p class="upcoming pb-3">{{$t('UpcomingSchedule')}}</p>
            <div class="fatherclass">
              <div class="onesons ">
                <span><i class="fa-solid fa-clock ps-1"></i></span>
                <span class="time ps-2">08-09AM</span>
              </div>
              <div class="twosons pt-2">
                <div class="d-flex justify-content-between">
                  <div class="">
                    <div class="iconperon"><i class="fa-solid fa-user me-2"></i>Braa Amrr</div>
                    <p class="langbox"><i class="fa-solid fa-book  me-2 pt-2"></i>Arabic</p>
                  </div>
                  <div><i class="fa-solid fa-arrow-up-right-from-square pt-3 pe-3"></i></div>
                </div>
              </div>
            </div>
            <!--  -->
            <!--  -->
            <div class="fathertwoclass mt-3">
              <div class="threesons">
                <span><i class="fa-solid fa-clock ps-1" id="twoclock"></i></span>
                <span class="time-two ps-2">12-10PM</span>
              </div>
              <div class="fourons pt-2">
                <div class="d-flex justify-content-between">
                  <div class="">
                    <p class="iconperon"><i class="fa-solid fa-user  me-2 "></i>Braa Amrr</p>
                    <p class="langbox"><i class="fa-solid fa-book  me-2 "></i>Arabic</p>
                  </div>
                  <div><i class="fa-solid fa-arrow-up-right-from-square pt-3 pe-3"></i></div>
                </div>
              </div>
            </div>
            <!--  -->
            <!--  -->
            <div class="fatherthreeclass mt-3">
              <div class="fivesons ">
                <span><i class="fa-solid fa-clock ps-1" id="threeclock"></i></span>
                <span class="time-three ps-2">02-05PM</span>
              </div>
              <div class="sixsons ">
                <div class="d-flex justify-content-between">
                  <div class="">
                    <p class="offtime"><i class="fa-solid fa-mug-saucer me-2  pt-2"></i>offtime</p>
                  </div>
                  <div><i class="fa-solid fa-arrow-up-right-from-square  me-2pt-3 pe-3"></i></div>
                </div>
              </div>
            </div>
          </b-col>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  name: 'SecTwo',
  data() {
    return {
      arraybox: [
        {
          Total: "TotalStudents",
          number: "125",
          icon: "fa-solid fa-users"
        },
        {
          Total: "TotalHours",
          number: "25",
          icon: "fa-solid fa-message"
        },
        {
          Total: "Wallet",
          number: "20$",
          icon: "fa-solid fa-wallet"
        }
      ]
    }
  }
}
</script>
  
