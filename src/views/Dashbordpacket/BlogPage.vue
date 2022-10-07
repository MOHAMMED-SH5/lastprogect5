<template>
    <div>
        <div class="d-flex justify-content-between">
            <p class="blog">
            {{$t('blog')}}
            </p>
            <b-button link to="/AddPostpage" class="adduser"> + Add new Post</b-button>
        </div>       
        <b-row class="mt-3">
            <b-col v-for="(item, index) in 6" :key="index" sm="12" md="6" lg="6">
                <div  class="cardblog mb-3">
                    <img class="img-fluid p-0" src="@/assets/img/man.png" alt="">
                    <div class="p-2">
                        <p class="tittel-cardblog mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Nobis aliquid voluptatem consequuntur</p>
                        <p class="date-cardblog mt-2">novemnber 20,22</p>
                        <p class="detailes-cardblog mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Nobis aliquid voluptatem consequuntur minima ea laudantium impedit!</p>
                        <a  class="linkcardblog mt-2 " href="">Lorem ipsum dolor sit amet.</a>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>