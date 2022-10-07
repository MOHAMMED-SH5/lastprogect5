<template>
  <div class="message">
    <h3 class="Message pt-3 pb-3">{{$t('Message')}}</h3>
    <b-row>
      <b-col sm="12" md="12" lg="4">
        <div class="box-one">
          <div class="allmessage  mt-3 mb-3">
              {{$t('AllMessage')}}
            </div>
            <SearchComp class="w-100"/>
          <div class="allboxcard  mt-4 mb-4" v-for="(item, index) in 6" :key="index">
            <div class="p-1 d-flex justify-content-between">
              <!-- part one -->
              <div class="sec-card">
                <div class="Braa me-2">
                  <img class="imgcard" src="@/assets/img/man.png" alt="" />
                </div>
                <div>
                  <p class="name-card"> Braa Adnan</p>
                  <p class="deatiles-card">last saan 13 hours</p>
                </div>
              </div>
              <!-- part two -->
              <div class="date">1/1/2022</div>
            </div>
            <!-- loremcard -->
            <p class="loremcard p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, repudiandae.
            </p>
          </div>
        </div>
      </b-col>
      <b-col class="box-navgtion" sm="12" md="12" lg="8">
        <div class="box-two">
          <div class="menua">
            <div class="d-flex justify-content-between">
              <div class="sectwoflex">
                <div><img class="imgcard  me-2" src="@/assets/img/man.png" alt="" /></div>
                <div>
                  <p class="name-card"> Braa Adnan</p>
                  <p class="deatiles-card">last saan 13 hours</p>
                </div>
              </div>
              <div class="">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </div>
          <div class="text-center">
            <p class="days pt-1 pb-1">1 days</p>
          </div>
          <div class="d-flex justify-content-start ">
            <div><img class="imgcard  ms-2 me-2" src="@/assets/img/man.png" alt="" /></div>
            <div>
              <div class="box-send">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dolorum incidunt
                similique ullam commodi officiis neque harum sit
                quibusdam aspernatur, labore maiores molestiae maxime expedita.
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end mt-3 mb-3">
            <div class="box-respons">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fuga accusantium,
            </div>
            <div><img class="imgcard  ms-2 me-2" src="@/assets/img/man.png" alt="" /></div>
          </div>
          <div class="d-flex justify-content-start  mt-3">
            <div><img class="imgcard  ms-2 me-2" src="@/assets/img/man.png" alt="" /></div>
            <div>
              <div class="box-send">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dolorum incidunt
                similique ullam commodi officiis neque harum sit
                quibusdam aspernatur, labore maiores molestiae maxime expedita.
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-start mt-3">
            <div><img class="imgcard  ms-2 me-2" src="@/assets/img/man.png" alt="" /></div>
            <div>
              <div class="box-send">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dolorum incidunt
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-start mt-3 mb-5">
            <div><img class="imgcard  ms-2 me-2" src="@/assets/img/man.png" alt="" /></div>
            <div>
              <div class="box-send">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dolorum incidunt
                similique ullam commodi officiis neque harum sit
                quibusdam aspernatur, labore maiores molestiae maxime expedita.
              </div>
            </div>
          </div>

        <div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
  

<script>
      import SearchComp from '@/components/SearchComp.vue'
      export default {
        components: {
          SearchComp,
    }
    }
</script>