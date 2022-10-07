<template>
    <div>
        <div class="d-flex justify-content-between">
            <p class="blog">
            {{$t('Community')}}
            </p>
            <b-button link to="" class="adduser"> + Add new Question</b-button>
        </div> 

        <b-row>
            <b-cols sm="12" md="12" lg="12">
                <div v-for="(item, index) in items" :key="index" class="accordion mt-3 mb-3" role="tablist">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-1>
                            <P>{{ parentMessage }}</P>
                        </b-button>
                        <b-card-body   class="d-flex">
                        <b-card-text><div class="subject  me-3">{{item.subject}}</div></b-card-text>
                        <b-card-text><div class="catogrey ">{{ item.catogery }}</div></b-card-text>
                        </b-card-body>
                    </b-card-header>
                    <b-collapse  id="accordion-1" visible subca="my-accordion" role="tabpanel">
                        <b-card-body   class="d-flex">
                        <b-card-text>lorem detAILES</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>

            </b-cols>
        </b-row>

    </div>
</template>

<script>
    export default {
      data() {
        return {
            parentMessage: 'lorem ipusm tiitel',
            items:
             [
                { 
                    subject: 'Foo' ,
                    catogery:'catogery'
                },
                { 
                    subject: 'Foo' ,
                    catogery:'catogery'
                }
            ]
      }
    }
    }
  </script>