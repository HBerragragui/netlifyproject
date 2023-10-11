<template>
<!-- <v-card
  :title="name"
  subtitle="Subtitle"
  text="..."
  variant="tonal"
>
  <v-card-actions>
    <v-btn>Click me</v-btn>
  </v-card-actions>
</v-card> -->
<v-row>
  <v-col cols="6">
    <v-img
      :width="600"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
></v-img>
  </v-col>
  
  <v-col cols="6">
    <h2>Nom : {{ name }}</h2>
  </v-col>
</v-row>
</template>

<script>
    export default {
        name: "PlantCard",
        setup() {
            return {
            }
        },
        props:{
            name: String
        },
        computed:{
            
        }
       
    };
</script>