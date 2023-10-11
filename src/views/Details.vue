<template>
   
    <v-row>
        <v-col cols="auto">
            <v-btn to="/">Retour</v-btn>
        </v-col>
        <v-col  cols="auto">
            <h1>Page Detail  {{ $route.params.id }}</h1> 
        </v-col>
      
    </v-row>
    <v-row>    
       
        <v-col cols="" v-if="plantDetail">
            <PlantCard :name="plantDetail.common_name"></PlantCard>
                 {{ plantDetail }}
        </v-col>
      
    </v-row>
</template>

<script>  
    import { useStore } from '../store/store';
    import { mapState } from 'pinia';
    
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
        }
       
    };
</script>

<script setup>
    import PlantCard from '../components/PlantCard.vue';
</script>