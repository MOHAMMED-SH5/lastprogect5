<template>
    <div>
        <p class="favorit">{{$t('favorit')}}</p>
        <SearchComp/>
        <b-row>
            <b-col  v-for="(item, index) in arrayfavourit" :key="index" sm="12" md="6" lg="4">
                <div class="cardfavorit mt-3">
                    <div class="card-header">
                        <img class="img-cardfavorit " :src="require(`@/assets/img/${item.imageman}`)"  alt="" />
                        <div class="card-badge"> {{item.cardbadge}} </div>
                    </div>
                    <!-- اللون الازرق والسكني  -->
                    <i  @click="item.isActive = !item.isActive"  :class="['fa-solid fa-regular fa-heart heatsicon', item.isActive ? 'text-danger ' : 'text-secondary ' ]"></i>
                    <div class="card-content">
                        <div class="d-flex justify-content-center pt-2">
                                <p class="Hhannen">{{item.name}}</p>
                                <img class="unitedstate mt-1 ms-2" src="@/assets/img/unitedstate.png"   alt="">
                                <img class="verinty mt-1 ms-2"  src="@/assets/img/verfint.png" alt="">
                           </div>
                           <div class="d-flex justify-content-center">
                                <i class="fa-solid fa-users fontuserfav me-1 pt-2"></i>
                                <div @click="item.rating = selectorindex + 1" class="me-1" lg="4" v-for="(selector, selectorindex) in 5"  :key="selectorindex" >
                                    <i :class="['fa-solid fa-star', selectorindex < item.rating ? 'text-danger' : 'text-secondary']" id="iconfaviot" />
                                </div>
                                <div class="zero">{{item.zero}}</div>
                           </div>
                           <div class="d-flex justify-content-center mt-2">
                                <div class= "speakers me-2"><p>{{$t('speakers')}}</p></div>
                                <div class="en-img me-2"><span class="ms-1 me-2 mt-1">en</span><img class="unitedstate mt-1 mb-1 me-2" src="@/assets/img/unitedstate.png" alt=""></div>
                           </div>
                           <div class="d-flex justify-content-center">
                                <div class="hourly me-2"><p class=" pt-2">{{$t('HourlyRate')}}</p></div>
                                <div class="pricefavorit me-2"><p>{{item.price}}</p></div>
                           </div>
                           <div class="d-flex justify-content-center mt-2">
                            <b-button class="buuton-book me-2">Book now</b-button>
                            <b-button class="boxmessage" variant="outline-secondary"><i class="fa-solid fa-message iconmessage"></i></b-button>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import SearchComp from '@/components/SearchComp.vue'
    export default {
      name: 'SecTwo',
      components: {
        SearchComp,
    },
      data() {
        return {
          arrayfavourit: [
            {
                cardbadge:"text test",
                name:"Hannen",
                zero:"(0)",
                isActive: false,
                En:"En",
                ar:"ar",
                price:"10$",
                imageman:"man.png", 
                rating:null
            }
          ]
        }
      }
    }

    </script>
