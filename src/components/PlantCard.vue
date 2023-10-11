
<script setup>
    import { useStore } from '../store/store';
    import { storeToRefs } from 'pinia'
    import { computed, reactive } from 'vue' 
    
    // STORE
    const store = useStore()
    //const favorisList = store.favorisList;
    const favorisList = computed(() => store.favorisList)
    const s_send = store.sendToFavoris();
    //const s_remouve = store.removeToFavoris();
    // const sendToFavoris = store.sendToFavoris();
    // const removeToFavoris = store.removeToFavoris();
    
    //PROPS
    defineProps({
      plantDetail : Object
    })

    //COMPUTED
    const isFavoris = computed(() => {
      return favorisList.forEach(element => {
        element.id == this.plantDetail.id ? true : false
      });
    })
    
    const titleBtn = computed(() => {
      return isFavoris == true ? 'Supprimer des Favoris' : "Ajouter au favoris";
    })

    //FOnction
    function sendFavoris(plant){
      if(isFavoris){
        console.log('favorisList', store.favorisList)
        s_send(plant)
        //removeToFavoris(plant)
      }
      else {
        console.log('Push favoris', plant)
        //sendToFavoris(plant)       
      }
    }
</script>

<template>
  <v-card class="mx-auto"
                    max-width="344"
                    color="#4e805a"
                    variant="tonal">
        
                <v-img :src="plantDetail.image_url"
                    height="200px"
                    cover>
                </v-img>

                <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                            {{ plantDetail.slug  }}
                        </div>
                        <div class="text-h6 mb-1">
                            {{ plantDetail.common_name  }}
                        </div>
                        <div class="text-caption">
                            Nom scientifique : {{ plantDetail.scientific_name }}
                        </div>
                        <div class="text-caption">
                            Année : {{ plantDetail.year }}
                        </div>
                    </div>
                </v-card-item>

                <v-card-actions>
                    <v-btn color="orange-lighten-2"
                           variant="text"
                           @click="sendFavoris(plantDetail)">
                        {{ titleBtn }}
                    </v-btn> 
                </v-card-actions>
                isFavoris : {{ isFavoris }}
            </v-card>
</template>