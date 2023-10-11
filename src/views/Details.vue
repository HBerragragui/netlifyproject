<script setup>
    import PlantCard from '../components/PlantCard.vue';
    import { useStore } from '../store/store';
    import { storeToRefs } from 'pinia'

    const { dataDetail } = storeToRefs(useStore());

    const plantDetail = dataDetail;
 
</script>

<template>  
    <v-row>
        <v-col cols="auto">
            <v-btn to="/">Retour</v-btn>
        </v-col>
        <v-col  cols="auto">
            <h1>Page Detail  {{ $route.params.id }}</h1> 
        </v-col>      
        <!-- {{ plantDetail }} -->
    </v-row>

    <v-row class="mt-2">
        <v-col cols="4">
            <PlantCard :plant-detail="plantDetail"></PlantCard>
        </v-col>

        <v-col style="border-left: 1px solid #4e805a;">
            <v-card variant="flat">
                <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                        <span class="font-weight-black">bibliography :</span>  {{ plantDetail.bibliography  }}
                        </div>
                        <div class="text-overline mb-1">
                            <span class="font-weight-black">author :</span>  {{ plantDetail.author  }}
                        </div>
                        <div class="text-overline mb-1">
                            <span class="font-weight-black"> rank : </span> {{ plantDetail.rank  }}
                        </div>
                        
                        <div class="text-overline mb-1" v-if="plantDetail.family_common_name">
                            <span class="font-weight-black">family_common_name :</span>  {{ plantDetail.family_common_name  }}
                        </div>
                        
                        <div class="text-overline mb-1">
                            <span class="font-weight-black"> synonyms : </span>
                            <ul >
                                <li v-for="syn in plantDetail.synonyms">
                                    {{  syn }}
                                </li>
                            </ul>
                        </div>
                       
                        <div class="text-overline mb-1" v-if="plantDetail.genus">
                            <span class="font-weight-black">genus :</span>  {{ plantDetail.genus  }}
                        </div>
                        
                        <div class="text-overline mb-1" v-if="plantDetail.family">
                            <span class="font-weight-black">family:</span>  {{ plantDetail.family  }}
                        </div>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<!-- <script>  
    import { useStore } from '../store/store';
    import { mapState, mapActions } from 'pinia';
    
    export default {
        name: "Details",
        setup() {
            return {
            }
        },
        computed:{
            ...mapState( useStore, {
                plantDetail:'dataDetail',
            })
            
        },
        methods:{
            ...mapActions(useStore, { 
                s_sendToFavoris: 'sendToFavoris'
            }), 
            sendFav(plant){
                console.log('quelque chose', plant)
                this.s_sendToFavoris(plant)
            }
        }
       
    };
</script> -->


