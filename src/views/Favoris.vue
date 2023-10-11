<script setup>
    import PlantCard from '../components/PlantCard.vue';
</script>

<template>
    <v-row>
        <v-col v-if="favorisList">
            <h1>Page Favoris </h1>    
        
        </v-col>
    </v-row>


    <v-row v-if="favorisList.length > 0">
        <v-col v-for="favoris in favorisList" :key="favoris">
            <PlantCard :plant-detail="favoris"></PlantCard>
        </v-col>
    </v-row>
    
    <v-row v-else>
        <v-col >
            <v-alert type="info"
                     title="Aucun favoris pour le moment :("
                     text=""
                     variant="tonal">
            </v-alert>
        </v-col>
    </v-row>
</template>

<script>  
    import { useStore } from '../store/store';
    import { mapState, mapActions } from 'pinia';
    
    export default {
        name: "Favoris",
        setup() {
            return {
                show:false
            }
        },
        computed:{
            ...mapState( useStore, {
                favorisList:'favorisList',
            })
            
        },
        methods:{
            ...mapActions(useStore, { 
                s_sendToFavoris: 'sendToFavoris'
            }), 
           
        }
       
    };
</script>